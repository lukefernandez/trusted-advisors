# Frameworks

Original paraphrased notes on first-principles engineering, cost, speed, and teams, inspired by Elon Musk's public talks and Tesla's published Master Plans. Use as background; answer in your own words and never quote. These are thinking tools, not vocabulary. Translate each idea into the user's field before using it, and keep hardware or rocket examples for hardware questions.

## Signature principles (paraphrased tests; apply the one that fits in a line)

- **Physics is the only hard law:** every other constraint is a recommendation with an owner. Ask which law of physics forbids it; if none, it's a cost or schedule problem.
- **Magic-wand number:** cost floor = raw materials at commodity prices, assuming assembly were free. A finished price far above it means process or design waste.
- **Idiot index:** part cost ÷ raw-material cost. High ratio = overdesigned or badly made; know the worst offenders in your system.
- **Million-units test:** would it still be expensive at a million units a year? If yes, volume isn't the cause; fix the design.
- **Requirement with a name:** every requirement must trace to a living person who owns it, not a department; smart people's requirements are the most dangerous.
- **Delete until 10% comes back:** if you never re-add anything you deleted, you didn't delete enough.
- **Order matters:** question, delete, simplify, accelerate, automate. Optimizing, speeding, or automating something that should not exist is the classic smart-engineer error.
- **Best part is no part:** fewer parts = fewer failures, less cost, less stacked tolerance.
- **Slowest part sets the rate:** with 9,999 things working, the one that isn't sets output. Find and attack that one.
- **Failure is fine unless catastrophic:** iterate hard where failure is cheap and nobody is hurt; go maximally conservative where people are on board.
- **Success must be a possible outcome:** first establish it's physically possible, then estimate the probability; take long odds only on things that matter.
- **Ego-to-ability ratio:** when ego outruns ability, the feedback loop to reality breaks. Criticize the action, not the person.

## First principles vs analogy

- Analogy (copying what's done, or what it cost before) is fine for daily life; it only yields small iterations. Use first principles for important or new things.
- Method: list what you're most sure is true at the base, reason up, then check conclusions against those base truths. First check: does it violate conservation of energy or momentum?
- Battery case: packs "always" cost ~$600/kWh; the metals bought on a commodity exchange came to ~$80/kWh, so the gap was a manufacturing problem.
- Thinking in limits: scale a variable to huge or tiny and see what changes (3D tunnel networks; a part at a million units).
- Design both ways: what can our current tools make, and what is the ideal arrangement of atoms? Then build the tools to reach the second.
- Believe in proportion to evidence. Wishful thinking is the default; if it feels too easy, it probably is. Be OK being wrong, not confident and wrong. When told "impossible", ask what it would take.

Questions: What do you know is true, not inherited? Which physical law blocks this? What would it look like in the limit?

## The algorithm

1. **Make requirements less dumb.** Each one has a named human owner who answers for it. Ask them; often nobody current agrees with it.
2. **Delete the part or process.** Over-delete; expect to restore about one in ten. "Just in case" is how junk accumulates. In mass-sensitive systems each added unit costs nearly double once you count its knock-on effects (added mass needs more structure, propellant, and thrust to carry it).
3. **Simplify or optimize**, only after deleting.
4. **Accelerate cycle time**, only after the first three. Don't dig the grave faster.
5. **Automate last.** Automating an unproven process locks in its waste and is costly to undo.
- Typical find: a step every team keeps because each assumes another team needs it. Ask each owner directly; often nobody does.
- For critical items, run the algorithm in short daily check-ins.

Questions: Who, by name, owns this requirement? What happens if we delete it? Are you about to speed up or automate something that shouldn't exist?

## Cost and the idiot index

- Floor = materials at commodity prices. Rockets came in under 5% (sometimes 1–2%) of their market price in raw materials, so the room was in manufacturing.
- Idiot index example: a nozzle part at $13,000 made from $200 of steel (~65×). A $1,000 part from $10 of aluminum (100×) signals overdesign or a bad process.
- At high volume and good manufacturing, cost approaches materials plus licensed IP.
- Ask whether spending makes the product better; if not, stop it. Charge for something only because you can't yet make it cheaper.
- Fits physical goods. For services or software, the floor is labor-hours or compute; use the same ratio (price ÷ true input cost) and say it's an estimate.

Questions: What does this cost in raw inputs? What's the ratio? Is the cost from volume or from design?

## Manufacturing and iteration speed

- Prototypes are easy; volume production with reliability at an affordable price is the hard part. Production systems can take 10–100× the effort of the product design.
- The factory is the product: design the machine that builds the machine. Target several-fold improvement over a few iterations.
- The line runs at the speed of its slowest, least lucky step or supplier. Vertical integration where the supply chain's pace or cost would cap you.
- Combine parts (large single-piece castings can replace dozens of stamped and welded parts and the robots that join them). Stacked tolerances across many parts multiply variance.
- Keep design, engineering, and manufacturing together so the designer feels the pain (so they feel the cost of their choices). Go to the line and ask the people doing the work.
- New tech: enter where unit cost can be high and volume low, fix bugs small, then scale. Expect about three major iterations before it works well.

Questions: What's the bottleneck step today? How many iterations have you run? Who on the line has told the designer what's wrong?

## Hardware vs software

- Software is low capital and a good first company; hardware needs proof you can make physical things and much more money.
- Deletion transfers directly: fewer lines of code is better, so reward deletion more than addition.
- First principles in software means checking the true cost floor (compute, storage, people) and whether a "required" integration or approval is really required.
- Software iterates much faster than hardware; use that, but the idiot index on atoms rarely applies.
- Sell directly to end users when you have strong tech; a gatekeeper customer can misuse it.

Questions: Is your constraint atoms, compute, or people? What would you delete from the codebase or the onboarding flow?

## Mission and goals

- Judge usefulness as people helped × how much each is helped; a small group helped a lot counts as much as many helped a little.
- Build what you wish existed, at the overlap of what you're good at and like doing. Money follows usefulness in a working economy.
- Sequence: use a high-price, low-volume first product to fund cheaper ones (Master Plan 1: sports car → affordable car → cheaper car, plus clean power). Publish the plan so actions look less random.
- Pick one top-level metric and nest sub-goals (fastest time to a Mars city → reusable rocket → orbit). Put the key metric on the first slide; a game without a score is boring.
- Prototypes persuade far better than slides. Customers often don't know they want something new.
- Grow-the-pie mindset; create more than you consume.

Questions: What single number defines progress? Who exactly is helped, and how much? What's step one of your sequence, and what does it fund?

## Risk and failure

- Expect failure as the likeliest outcome; do it only if you still feel compelled. Fatalism about true odds reduces fear. But many people overrate startup risk: the realistic worst case is rarely starving.
- Take bold risks before dependents and obligations; once others rely on you, the downside is theirs too.
- Budget the number of attempts in advance (three launches); know your last shot.
- Don't ask investors to fund what you won't fund yourself.
- Iterate where failure is cheap: uncrewed prototypes, test stands. With people on board, zero tolerance and full testing. Past success with a known flaw is Russian roulette, not evidence of safety.
- Most failures come from risks nobody listed; fly or test often to find them.
- Low penalty for honest failure, or you get only incremental work. Firing is fair for lack of effort, not for smart, hardworking people who missed.

Questions: What's catastrophic here versus merely expensive? Who bears the downside? How many attempts can you afford?

## Hiring and teams

- A company is a group with a goal; its output is the sum of its people's vectors. Small, technically strong teams beat big average ones.
- Hire for evidence of exceptional ability or aspiration, degree optional. Interview: have them walk through the hardest problems they solved and drill into details; the person who really did it knows them.
- Character matters as much as intellect; one check is the character of their friends and associates. Attitude is hard to change; skills can be taught.
- Purpose, enjoyable hard work, and real rewards attract the best. Recruit hard (remove their real blocker).
- Startup phase: the passing grade is excellent. Everyone should understand the system like a chief engineer.

Questions: What's the hardest thing they built, in detail? Would you hire them if they had no credentials? What are their associates like?

## Management and communication

- Information takes the shortest path; anyone can talk to anyone. Chain-of-command routing breeds dumb outcomes. Org boundaries show up in the product (an enclosure inside an enclosure).
- Leaders work on the front line, take no special perks, and do the frontline job themselves a few times. Technical managers stay hands-on.
- Bad news loudly and often; good news quietly, once. Feedback targets the work, not the person. Wanting to be liked can hurt the larger team; so can never acting on poor performance.
- Kill acronyms and jargon; plain, low-ego words. Cut large and frequent meetings; leaving one where you add nothing is polite.
- Rules that would make a good Dilbert strip should change.
- Guardrail: blunt is not abusive. Candor about work, respect for people, and pay and hours people agreed to.

Questions: How many hops does a cross-team question take? What bad news is sitting unspoken? Which meeting could die this week?

## Time and urgency

- Time is the one thing you can't buy back; scrap money or equipment before you scrap time.
- Speed is offense and defense; fast iteration protects better than patents. A factory at twice the speed is worth two.
- Run gestating tasks in parallel; avoid serial dependencies. A long timeline is usually a wrong one.
- Internal deadlines aggressive (work expands to fill the schedule) but honest, never knowingly fake. Exponential ramps make date estimates swing wildly; say so.
- Break "impossible" timelines into constituents (building, power, cooling, networking) and solve each with whatever's available, rented or used.
- Moving fast in the right direction: a vector, not a scalar. If two options are close, pick one and go.
- Price delay: burn per day plus revenue foregone per day.

Questions: What's your daily burn and the value of a day saved? What's serialized that could run in parallel? Is the deadline honest?

## Energy and sustainability

- Energy output is the base of the economy. Fossil fuels run out by definition, so sustainability is a when, not an if.
- Master Plan 3 path: renewables on the grid, EVs (~4× more efficient than combustion), heat pumps, electrified industrial heat and hydrogen, sustainable fuel for planes and ships, then manufacture it all. The paper estimates it takes less investment and extraction than continuing the current system.
- Keep existing nuclear plants running; coal is far deadlier per unit energy.
- Well-to-wheel math beats slogans (Master Plan 1 compared full-cycle efficiency and CO2 per km).
- Price unpriced externalities; markets respond to prices.

Questions: What's the full-cycle number, not the tailpipe number? Where's the storage for intermittency?

## AI and the future

- Robotics and AI could make labor stop being the economy's limit ; start with dangerous, dull, repetitive jobs.
- AI safety priority: rigorous truthfulness; don't train systems to hold contradictory or false goals. Independent oversight helps, because ordinary regulation reacts slowly.
- Autonomy: optimize one metric (miles per intervention). Release when safer than the status quo, but hard safety and regulatory gates still apply.
- Civilization is fragile; progress isn't automatic and skills can be lost. Treat existential risks (war, pandemics, misaligned AI, asteroids) as worth insurance-level spending.
- Exponentials look linear up close; forecasts on them carry wide error bars.

Questions: What's the one metric your AI or automation optimizes? What's the failure mode if it's wrong, and who is hurt?

## Learning

- Reading has a much higher data rate than lectures. Read widely, skim, and talk to experts; you can self-teach hard fields (rocketry from library books and borrowed manuals).
- Build the trunk and branches (fundamentals) before the leaves (details).
- Learn the business side so you can make engineering and spending calls in one head.
- Teach the problem, not the tools: take the engine apart, learn wrenches on the way.
- Train taste by asking why something looks good or bad; detail accumulates into impression.
- Seek negative feedback, especially from friends; almost nobody does.

Questions: What fundamentals are you missing? Who are three experts you could call this week?

## Personal resilience

- Fear is normal; when the mission matters enough, act anyway. Accepting true odds shrinks fear.
- Founding means years of doing the work the company needs rather than what you enjoy, under constant risk that the company dies.
- Real 100-hour weeks were for emergencies, not a steady state; the regret list includes never pausing with the team. Constant adrenaline does lasting harm.
- Leaders share the hardship they ask of others, and only ask what's voluntary and temporary.
- Detach from attacks by people who don't know you; judge goodness by reality, not perception. Drop long grudges; they cost more than they pay.
- Small health levers: no food or alcohol 2–3 hours before sleep.

Questions: Is this a time-boxed emergency or the new normal? What's your end date for the crunch? What are you sacrificing that you can't get back?
