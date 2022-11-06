import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
  manifest_version: 3,
  name: "Extend Storage Sample",
  version: "1.0.0",
  permissions: ["storage"],
  action: {
    default_popup: "index.html",
  },
});
