import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://airdb.team",
  output: "static",
  publicDir: "static",
  integrations: [sitemap()],
});
