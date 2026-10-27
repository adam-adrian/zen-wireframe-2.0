// Gecko takes a CSS animation's start time from the last refresh tick. When the window
// was idle (urlbar opened with Ctrl+L / Ctrl+T, findbar with Ctrl+F), that tick is stale
// and the opening animation is already finished on its first painted frame.
// Hold the animation at 0 and start it on a fresh tick instead.
{
  const replay = (el, isShown) => {
    const anim = el.getAnimations().find(a => a.animationName && a.animationName !== "none");
    if (!anim) return;
    anim.pause();
    anim.currentTime = 0;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (isShown() && anim.playState === "paused") anim.play();
    }));
  };

  const urlbar = gURLBar;
  const urlbarShown = () => urlbar.hasAttribute("open");
  const observer = new MutationObserver(() => {
    if (urlbarShown()) replay(urlbar, urlbarShown);
  });
  observer.observe(urlbar, { attributeFilter: ["open"] });

  const onFindbarOpen = ({ target }) => replay(target, () => !target.hidden);
  window.addEventListener("findbaropen", onFindbarOpen);

  // Mirror the selected tab's loading state onto :root as wireframe-tab-*. CSS used
  // :root:has(.tabbrowser-tab[selected][busy]) before, which re-matched every tab on
  // each load start/stop and tab switch.
  const root = document.documentElement;
  const mirrored = ["busy", "pendingicon", "progress", "muted"];
  const syncTab = () => {
    const tab = gBrowser.selectedTab;
    for (const attr of mirrored) root.toggleAttribute(`wireframe-tab-${attr}`, tab.hasAttribute(attr));
  };
  const tabObserver = new MutationObserver(syncTab);
  const onTabSelect = () => {
    tabObserver.disconnect();
    tabObserver.observe(gBrowser.selectedTab, { attributeFilter: mirrored });
    syncTab();
  };
  gBrowser.tabContainer.addEventListener("TabSelect", onTabSelect);
  onTabSelect();

  // Compact mode: Zen sets zen-compact-mode before animating when entering, but only
  // after the animation when leaving, so the attribute pair alone cannot tell the two
  // directions apart. Track when compact mode was turned on and publish which direction
  // a transition runs in, so the theme can move its compact geometry while the sidebar
  // is off-screen instead of at the start/end of the slide.
  let wasCompact = root.getAttribute("zen-compact-mode") === "true";
  let compactTurnedOnAt = 0;
  let transitionTimer;
  const clearTransitionFlags = () => {
    root.removeAttribute("wireframe-compact-entering");
    root.removeAttribute("wireframe-compact-exiting");
    clearTimeout(transitionTimer);
  };
  const compactObserver = new MutationObserver(() => {
    const compact = root.getAttribute("zen-compact-mode") === "true";
    if (compact !== wasCompact) {
      wasCompact = compact;
      compactTurnedOnAt = compact ? performance.now() : 0;
    }
    if (!root.hasAttribute("zen-compact-animating")) {
      clearTransitionFlags();
      return;
    }
    if (!compact) return;
    const entering =
      compactTurnedOnAt && performance.now() - compactTurnedOnAt < 500;
    if (entering) compactTurnedOnAt = 0;
    root.setAttribute(
      entering ? "wireframe-compact-entering" : "wireframe-compact-exiting",
      "true"
    );
    clearTimeout(transitionTimer);
    // safety net in case Zen never finishes the animation promise
    transitionTimer = setTimeout(clearTransitionFlags, 800);
  });
  compactObserver.observe(root, {
    attributeFilter: ["zen-compact-mode", "zen-compact-animating"],
  });

  window.addUnloadListener?.(() => {
    observer.disconnect();
    window.removeEventListener("findbaropen", onFindbarOpen);
    tabObserver.disconnect();
    compactObserver.disconnect();
    clearTransitionFlags();
    gBrowser.tabContainer.removeEventListener("TabSelect", onTabSelect);
    for (const attr of mirrored) root.removeAttribute(`wireframe-tab-${attr}`);
  });
}
