# Wireframe Theme Configuration

## Preferences Implementation

This theme implements customizable preferences using Zen Browser's preference system. Preferences are defined in `preferences.json` and can be accessed through Zen Browser's theme settings interface (Sine).

## Available Preferences

### Window Controls

- `wireframe.macos.controls` *(boolean, default: false)* — Disable macOS style window controls
- `wireframe.macos.controls.focus` *(boolean, default: true)* — Greyscale controls if window is inactive (macOS style only)
- `wireframe.controls.reverse` *(boolean, default: false)* — Reverse window controls
- `wireframe.macos.controls.radius` *(dropdown, default: "0")* — Change macos window control radius `[Square, Squircle, Circle]`
- `zen.view.experimental-force-window-controls-left` *(boolean, default: true)* — Force window controls to the left (for macOS style controls only)

### Toolbar and Navigation

- `wireframe.toolbar.hide` *(boolean, default: false)* — Auto hide toolbar buttons (Reveal on hover)
- `wireframe.navigation.hide` *(boolean, default: false)* — Disable navigation buttons
- `wireframe.workspace.icon.hide` *(boolean, default: true)* — Hide workspace indicator icon
- `wireframe.workspace-switch.fan` *(boolean, default: false)* — Enable fan style workspace switcher (experimental)
- `wireframe.sidebar-foot.hide` *(boolean, default: true)* — Hide sidebar foot buttons
- `wireframe.statusbar.disable` *(boolean, default: true)* — Disable status bar
- `wireframe.floating-compact-sidebar.enabled` *(boolean, default: true)* — Enable floating compact sidebar
- `wireframe.compact-sidebar.hide` *(boolean, default: none)* — Hide compact sidebar on empty tab
- `wireframe.compact.sidebar.transparent` *(boolean, default: none)* — Make sidebar transparent in compact mode
- `wireframe.contextmenu` *(boolean, default: none)* — Enable glass tint context menu
- `wireframe.ff-sidebar.floating` *(boolean, default: true)* — Enable floating firefox sidebar
- `wireframe.nogaps.enabled` *(boolean, default: none)* — Enable no gap for single-toolbar
- `wireframe.nogaps.border.enabled` *(boolean, default: none)* — Show splitter (for no gaps mod)
- `wireframe.pinned-ext.enabled` *(boolean, default: none)* — Enable pinned extensions
- `wireframe.trackpad.animation` *(boolean, default: none)* — Enable trackpad animations

### URL bar Settings

- `wireframe.urlbar.style` *(dropdown, default: "None")* — Change URL bar style `[slim, Slim(Centered), full]`
- `wireframe.urlbar.border_radius` *(dropdown, default: "None")* — Border radius for urlbar `[0px, 4px, 8px, 12px, 16px, 20px, ...]`
- `wireframe.urlbar.blurred` *(boolean, default: false)* — Enable tinted glass effect on URL bar
- `wireframe.urlbar.position.top` *(boolean, default: none)* — Position URL bar at the top (for multiple and collapsed toolbar only)
- `wireframe.urlbar-loading.text` *(boolean, default: true)* — Enable custom new urlbar loading text
- `wireframe.urlbar-open.effect` *(dropdown, default: "Slide from Bottom")* — URLBar Opening Animation `[Slide from Bottom, Magnetic Rise, PopCorn, Drop Off, Neon Flash, Soft Warp, ...]`
- `wireframe.urlbar-focus.effect` *(dropdown, default: "Hard Shift")* — Webview Animation `[Hard Shift, Lights Off, Pushed Away, Soft Fade, Film Grain Blur, Flash Bang, ...]`
- `wireframe.urlbar.icons.hide` *(boolean, default: none)* — Hide website icons in URL bar results
- `wireframe.urlbar.icons.greyscale` *(boolean, default: none)* — Make website icons greyscale in URL bar results

### Cool Visual Element Settings

- `wireframe.blank.logo` *(dropdown, default: "wireframe")* — Change blank page logo `[No Logo, Wireframe, Checks, Starlight, Rings, Waves, ...]`
- `wf-blank-logo-size` *(string, default: "150px")* — Change blank page logo size
- `wf-blank-logo-opacity` *(string, default: "0.75")* — Change blank page logo opacity
- `wireframe.blank.theme` *(dropdown, default: "None")* — Change color scheme for about:blank `[Dark Tint, Light Tint, Transparent]`
- `wireframe.browser.pattern` *(dropdown, default: "none")* — Change browser background pattern `[None, Fancy Rectangles, Leafs, Stripes, Stars, Waves, ...]`
- `pattern-opacity` *(string, default: "0.4")* — Change browser background pattern opacity
- `pattern-brightness` *(string, default: "0.7")* — Change browser background pattern brightness

### Tab Settings

- `wireframe.new-tab.label` *(boolean, default: none)* — Enable custom new tab label
- `wireframe.new-tab.reveal.animation` *(boolean, default: none)* — Enable reveal on hover animation for new tab
- `zen.theme.essentials-favicon-bg` *(boolean, default: none)* — Enable favicon gradient background for essentials
- `wireframe.audio.indicator.disable` *(boolean, default: none)* — Disable audio indicator on tab
- `wireframe.tab-hover.animation` *(boolean, default: none)* — Enable tab hover animation
- `wireframe.tab-icon.invert` *(boolean, default: none)* — Invert tab icon color
- `wireframe.folders` *(dropdown, default: "border")* — Folder styling options `[Border, Background]`
- `wireframe.tab-loading.animation` *(dropdown, default: "both")* — Tab loading animation options `[Loading Bar, Tab Background Progress Bar, Both]`
- `wireframe.tab-switch.animation` *(dropdown, default: "Vertical Veil")* — Tab switching animation options `[Vertical Veil, Clean Sever, Blurry Dreams, Prism Shatter, Hard Cut, Monolith Slide, ...]`

### Border Settings

- `wireframe.window.border` *(dropdown, default: "wireframe")* — Change border around the browser window `[wireframe, macos]`
- `wf-border-color` *(string, default: "None")* — Change border color
- `wireframe.webview.border` *(dropdown, default: "wireframe")* — Change border around the webview `[wireframe, macos]`
- `wireframe.tab-shadow.disabled` *(boolean, default: true)* — Disable tab shadow
- `wireframe.urlbar.border` *(dropdown, default: "wireframe")* — Change border around the URL bar `[wireframe, macos]`
- `wireframe.macos.border` *(boolean, default: none)* — Enable macOS style border for compact sidebar and other elements
- `wireframe.webview.border_radius` *(dropdown, default: "None")* — Border radius for webview `[0px, 4px, 8px, 12px, 16px, 20px]`
- `wireframe.window.border_radius` *(dropdown, default: "None")* — Border radius for window `[0px, 4px, 8px, 12px, 16px, 20px, ...]`
- `wireframe.tab.borders` *(dropdown, default: "None")* — Border styling for tabs `[macOS: All, macOS: Active]`
- `wireframe.tab.border_radius` *(dropdown, default: "None")* — Border radius for tabs `[0px, 4px, 8px, 12px, 16px, 20px, ...]`
- `wireframe.essen.borders` *(dropdown, default: "None")* — Border styling for essentials `[macOS: All, macOS: Active]`
- `wireframe.essentials.border_radius` *(dropdown, default: "None")* — Border radius for essentials `[0px, 4px, 8px, 12px, 16px, 20px, ...]`

### Typography

- `wireframe.font` *(dropdown, default: "Bricolage")* — Font `[SF-Pro, Bricolage Grotesque, Monocraft, Geist Mono, JetBrains Mono, SUSE, ...]`
- `wireframe-font-size` *(string, default: "")* — Change font size for tabs

### Picture-in-Picture

- `wireframe.pip.disabled` *(boolean, default: none)* — Disable Picture-in-Picture customization
- `wireframe.pip.rounded` *(boolean, default: none)* — Enable rounded corners for PiP window
- `wireframe.pip.border_radius` *(dropdown, default: "None")* — Border radius for PiP controls `[0px, 4px, 6px, 8px, 10px]`
- `wireframe.pip.blur` *(boolean, default: none)* — Enable blur effect on PiP controls

### Media Player

- `wireframe.player.minimal` *(boolean, default: none)* — Make the Media Player window minimal (pip, volume, and call controls hidden)
- `wireframe.player.flip` *(boolean, default: none)* — Flipped media player

## How Preferences Work

Preferences toggle CSS rules using the Gecko `@media (-moz-pref(...))` query or CSS custom properties:

```css
/* Boolean preference */
@media (-moz-pref("wireframe.player.minimal")) {
  .zen-media-pip-button,
  .zen-media-mute-button {
    display: none !important;
  }
}

/* Dropdown preference with specific value */
@media (-moz-pref("wireframe.urlbar.style", "slim")) {
  #urlbar {
    width: 320px !important;
  }
}
```

## Adding New Preferences

To add new preferences to the theme:

1. Add the preference definition to `preferences.json`.
2. Implement matching `@media (-moz-pref("your.pref"))` or CSS variables in the relevant file in `modules/`.
3. Update `CONFIG.md` and test in Zen Browser.
