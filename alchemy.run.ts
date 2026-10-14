import * as Alchemy from "alchemy";
import * as Cloudflare from "alchemy/Cloudflare";
import * as Effect from "effect/Effect";

/**
 * The static Astro build served as Worker
 * assets, with worker/index.ts handling only the /ingest PostHog proxy.
 * The deploy token needs Workers edit plus DNS edit on lukefernandez.io.
 */
export const Site = Cloudflare.Worker("Site", {
  main: "./worker/index.ts",
  assets: {
    directory: "./dist",
    runWorkerFirst: ["/ingest/*"],
  },
  domain: { name: "advisors.lukefernandez.io" },
});

export default Alchemy.Stack(
  "advisors-site",
  {
    providers: Cloudflare.providers(),
    state: Cloudflare.state(),
  },
  Effect.gen(function* () {
    const site = yield* Site;
    return { url: site.url };
  }),
);
