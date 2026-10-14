# 001 — Make the character click hop end at rest with clean easing

- **Status**: DONE
- **Commit**: c73d308
- **Severity**: HIGH
- **Category**: Easing & duration; Physicality & origin
- **Estimated scope**: 1 file, 2 CSS lines

Covers audit findings 1 and 2. They share the same two lines, so they are fixed together.

## Problem

Clicking a character plays the `cheer` keyframes. The final keyframe leaves the figure raised and scaled, and the JS removes the `cheer` class on `animationend`, so the figure snaps back to its rest pose in a single frame. That is the "jump at the end".

```css
/* src/pages/index.astro:85 — current */
.card.has-figure .figure.cheer { animation:cheer .6s cubic-bezier(.3,1.45,.5,1) both; }
/* src/pages/index.astro:86 — current */
@keyframes cheer { 0% { transform:translateY(0); } 25% { transform:translateY(0) scale(1.04,.96); } 55% { transform:translateY(-10px) rotate(-2.75deg) scale(.985,1.02); } 78% { transform:translateY(-5px) rotate(1.5deg); } 100% { transform:translateY(-3.5px) rotate(0) scale(1.015); } }
```

```ts
// src/pages/index.astro:140 — current (keep as is)
el.addEventListener("animationend", () => el.classList.remove("cheer"));
```

There's a second problem. `cubic-bezier(.3,1.45,.5,1)` overshoots, and CSS applies `animation-timing-function` to every keyframe segment. So every segment overshoots, and the last one wobbles past its target before settling.

## Target

The hop must start and end at the identity transform. Bounce comes from the keyframes, and each segment uses a strong ease-out.

```css
/* target, src/pages/index.astro:85 */
.card.has-figure .figure.cheer { animation:cheer 600ms cubic-bezier(0.23, 1, 0.32, 1); }
/* target, src/pages/index.astro:86 */
@keyframes cheer {
  0%   { transform:translateY(0) rotate(0) scale(1, 1); }
  20%  { transform:translateY(0) rotate(0) scale(1.04, .96); }
  50%  { transform:translateY(-10px) rotate(-2.75deg) scale(.985, 1.02); }
  75%  { transform:translateY(0) rotate(1deg) scale(1.02, .98); }
  100% { transform:translateY(0) rotate(0) scale(1, 1); }
}
```

Notes:
- The `both` fill mode is removed. With the end frame equal to the rest pose, no fill is needed, and removing the class is invisible.
- Every keyframe lists the same functions in the same order (`translateY rotate scale`), so the browser interpolates each one numerically instead of falling back to matrix interpolation.
- The 75% keyframe is a small landing squash, so the figure visibly settles instead of drifting down.

## Repo conventions to follow

- All motion is plain CSS inside the `<style>` block of `src/pages/index.astro`. There are no tokens file or motion library. Keep the edit inline there.
- `cubic-bezier(0.23, 1, 0.32, 1)` is the standard strong ease-out for UI.

## Steps

1. In `src/pages/index.astro`, replace the line `.card.has-figure .figure.cheer { animation:cheer .6s cubic-bezier(.3,1.45,.5,1) both; }` with the target line 85 above, exactly.
2. In the same file, replace the whole single-line `@keyframes cheer { ... }` rule with the target `@keyframes cheer` block above, exactly.

## Boundaries

- Do NOT touch the `<script>` block, the Cuelume sound, the `animationend` handler, or the `prefers-reduced-motion` rule at line 87.
- Do NOT change markup, images, or any other CSS rule.
- Do NOT add dependencies.
- If lines 85 and 86 don't match the "current" excerpts (drift since c73d308), STOP and report.

## Verification

- **Mechanical**: run `bun run build`. Expect `[build] Complete!` with no errors.
- **Feel check**: run `bunx astro preview`, then click each character:
  - The figure squashes, hops, lands with a small squash, and comes to rest with no visible snap or jump on the last frame.
  - In the DevTools Animations panel at 10% speed, the 100% frame and the resting state are identical: no position or scale change when the animation ends.
  - Clicking again mid-hop restarts the hop cleanly. That's accepted for this one-time playful motion.
  - With `prefers-reduced-motion: reduce` emulated in the Rendering panel, clicking produces no movement and the sound still plays.
- **Done when**: no frame shows a positional or scale discontinuity at the end of the hop at 10% speed.
