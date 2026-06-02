import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://ibs-saxony.com",
  output: "static",
  integrations: [react()]
});
