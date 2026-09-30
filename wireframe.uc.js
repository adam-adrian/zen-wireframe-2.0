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

  window.addUnloadListener?.(() => {
    observer.disconnect();
    window.removeEventListener("findbaropen", onFindbarOpen);
  });
}
