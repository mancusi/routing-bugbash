import { defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import yextSSG from "@yext/pages/vite-plugin";
import fs from "fs-extra";

const vitePlugin = () => ({
  name: "copy plugin",
  buildEnd: () => {
    fs.copySync("./public", "./dist");
  }
});

export default defineConfig({
  plugins: [react(), yextSSG(), vitePlugin()],
  publicDir: "/public",
  build: {
    assetsDir: "prefix/assets"
  }
});
