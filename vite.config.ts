import devtoolsJson from "vite-plugin-devtools-json";
import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [
    tailwindcss(),
    imagetools({
      defaultDirectives: (url) => {
        url.searchParams.set("format", "webp");
        return url.searchParams;
      },
    }),
    sveltekit(),
    devtoolsJson(),
  ],
});
