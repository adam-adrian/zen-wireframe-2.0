// Gecko takes a CSS animation's start time from the last refresh tick. When the window
// was idle (urlbar opened with Ctrl+L / Ctrl+T instead of the mouse), that tick is stale
// and the urlbar opening animation is already finished on its first painted frame.
// Hold the animation at 0 and start it on a fresh tick instead.
{
  const urlbar = gURLBar;
  const observer = new MutationObserver(() => {
    if (!urlbar.hasAttribute("open")) return;
    const anim = urlbar.getAnimations().find(a => a.animationName && a.animationName !== "none");
    if (!anim) return;
    anim.pause();
    anim.currentTime = 0;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (urlbar.hasAttribute("open") && anim.playState === "paused") anim.play();
    }));
  });
  observer.observe(urlbar, { attributeFilter: ["open"] });
  window.addUnloadListener?.(() => observer.disconnect());
}
