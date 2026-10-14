# 002 — Add press feedback to clickable characters

- **Status**: DONE
- **Commit**: c73d308
- **Severity**: LOW
- **Category**: Physicality & origin
- **Estimated scope**: 1 file, 1–2 CSS lines

## Problem

The characters respond only after the click completes (on mouse-up). While the mouse button is held, nothing visibly reacts, so the press feels dead.

```css
/* src/pages/index.astro:84 — current */
.card.has-figure .figure { transform-origin:50% 100%; cursor:pointer; }
```

## Target

```css
/* target, src/pages/index.astro:84 */
.card.has-figure .figure { transform-origin:50% 100%; cursor:pointer; transition:transform 160ms cubic-bezier(0.23, 1, 0.32, 1); }
.card.has-figure .figure:active:not(.cheer) { transform:scale(0.97); }
```

- `transform-origin:50% 100%` (already set) makes the press compress toward the feet.
- `:not(.cheer)` keeps the press scale from fighting the hop keyframes while they run.

## Repo conventions to follow

- Plain CSS in the `<style>` block of `src/pages/index.astro`. No tokens file.
- The strong ease-out `cubic-bezier(0.23, 1, 0.32, 1)` matches plan 001.

## Steps

1. In `src/pages/index.astro`, replace line 84 with the first target line above.
2. Directly after it, insert the second target line above.
3. In the existing `@media (prefers-reduced-motion: reduce)` rule for `.card.has-figure .figure.cheer`, add `.card.has-figure .figure { transition:none; }` and `.card.has-figure .figure:active { transform:none; }`.

## Boundaries

- Do NOT touch the `cheer` animation or keyframes. That's plan 001.
- Do NOT touch the `<script>` block.
- Do NOT add dependencies.
- If line 84 doesn't match the "current" excerpt, STOP and report.

## Verification

- **Mechanical**: run `bun run build`. Expect `[build] Complete!`.
- **Feel check**: run `bunx astro preview`:
  - Press and hold on a character. It shrinks slightly (3%) toward its feet within about 160ms.
  - Release it. The hop from plan 001 plays from the rest pose, with no extra jump.
  - With `prefers-reduced-motion: reduce` emulated, pressing causes no scale change.
- **Done when**: a held press shows a visible 0.97 scale toward the feet, and releasing plays the hop with no discontinuity.
