import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://advisors.lukefernandez.io",
  output: "static",
  build: { inlineStylesheets: "always" },
});
