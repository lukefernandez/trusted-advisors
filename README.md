# Trusted Advisors

AI advisors modeled on the public ideas of influential thinkers. Each advisor is an original persona, not the real person, and is not affiliated with or endorsed by them.

Every advisor ships two ways:

- **Agent skill:** a standard `SKILL.md` in [`skills/`](skills/), usable in any agent that supports skills (Grok Bot, Claude Code, Cursor, Codex).
- **Grok Bot:** a ready-made bot built on the same skill, with its own name and character.

## Skills

| Advisor | Inspired by | Skill |
| --- | --- | --- |
| Startup Mentor | Paul Graham's essays | [`skills/startup-mentor`](skills/startup-mentor) |
| Growth Coach | Alex Hormozi's free podcast and videos | [`skills/growth-coach`](skills/growth-coach) |
| Comms Strategist | Lulu Cheng Meservey's *Flack* newsletter | [`skills/comms-strategist`](skills/comms-strategist) |
| First Principles Thinker | *The Book of Elon* (free online) and Tesla's Master Plans | [`skills/first-principles-thinker`](skills/first-principles-thinker) |
| Product Visionary | Steve Jobs's public talks, interviews and Stanford speech | [`skills/product-visionary`](skills/product-visionary) |
| Modern Philosopher | *The Almanack of Naval Ravikant* (free online) and his public talks | [`skills/modern-philosopher`](skills/modern-philosopher) |


### Install a skill

Copy the skill's folder into your agent's skills directory, for example:

```sh
cp -r skills/startup-mentor ~/.claude/skills/
```

## Website

The site at [advisors.lukefernandez.io](https://advisors.lukefernandez.io) is an Astro app in this repo.

```sh
bun install
bun run dev      # local
bun run deploy   # build + deploy to Cloudflare via Alchemy
```
