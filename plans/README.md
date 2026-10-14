# Animation plans

| # | Title | Severity | Status |
|---|---|---|---|
| 001 | Make the character click hop end at rest with clean easing | HIGH | DONE |
| 002 | Add press feedback to clickable characters | LOW | DONE |
| 003 | Straight cutesy jump (remove tilt) | after 001-002 | DONE |

## Execution order

1. **001.** It fixes the visible jump at the end of the hop.
2. **002.** It depends on 001, because its `:not(.cheer)` guard assumes the hop now ends at rest.
