# 003 — Replace hop + tilt wobble with a straight cutesy jump

Commit: b085b2a · Status: DONE · Severity: MEDIUM (Physicality)

## Problem
`src/pages/index.astro:141-164`. Click runs two animations: a translate/scale hop (line 154) and a damped `rotate` spring (`spring(-6.2)`, line 164, 800ms, 90ms delay). The rotation outlasts the 620ms hop and swings both ways, so the figure traces an arc and feels circular instead of jumping.

## Change (only this file, only the click handler)
1. Delete the `spring` helper (lines 141-147) and the `el.animate(spring(-6.2), ...)` call (line 164). No `rotate` anywhere.
2. Replace the hop keyframes with a vertical-only squash-and-stretch, `transform-origin` stays `50% 100%`:
```js
el.animate(
  [
    { translate: "0 0",     scale: "1 1",       easing: "cubic-bezier(0.23, 1, 0.32, 1)" },
    { translate: "0 0",     scale: "1.07 .93",  offset: 0.14, easing: "cubic-bezier(0.23, 1, 0.32, 1)" },   // crouch
    { translate: "0 -14px", scale: ".96 1.05",  offset: 0.46, easing: "cubic-bezier(0.55, 0, 0.75, 0.3)" }, // apex, fall with gravity
    { translate: "0 0",     scale: "1.05 .95",  offset: 0.74, easing: "cubic-bezier(0.34, 1.56, 0.64, 1)" }, // land, tiny overshoot
    { translate: "0 0",     scale: "1 1" },
  ],
  { duration: 560 },
);
```
3. Keep `play("select")`, the reduced-motion early return, and `getAnimations().cancel()` for interruptibility.

## Out of scope
Sound, CSS `:active` press scale, card layout.

## Verify
- `bun run build` passes; grep shows no `rotate` in index.astro.
- Feel-check in DevTools Animations panel at 10% speed: figure moves only vertically, crouches, rises, lands with one small squish, ends exactly at rest (no snap). Rapid double-click restarts cleanly.
