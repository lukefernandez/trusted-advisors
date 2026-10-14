/**
 * The static Astro build is served straight from assets; this code runs
 * only for /ingest/* (runWorkerFirst in alchemy.run.ts): the reverse proxy
 * to PostHog, so ingestion is first-party and ad blockers can't tell it
 * from site traffic. PostHog's documented Cloudflare proxy pattern, the same
 * worker lukefernandez.io runs (2026-09-18).
 */

interface Env {
  ASSETS: Fetcher;
}

const API_HOST = "us.i.posthog.com";
const ASSET_HOST = "us-assets.i.posthog.com";

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/ingest/")) {
      const isStatic = url.pathname.startsWith("/ingest/static/");
      const host = isStatic ? ASSET_HOST : API_HOST;
      const path = url.pathname.replace(/^\/ingest/, "");
      const target = `https://${host}${path}${url.search}`;

      const headers = new Headers(request.headers);
      headers.set("host", host);

      return fetch(target, {
        method: request.method,
        headers,
        body: request.body,
        redirect: "follow",
      });
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
