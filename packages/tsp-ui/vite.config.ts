import { definePlaygroundViteConfig } from "@typespec/playground/vite";
import { defineConfig } from "vite";


export default defineConfig(() => {
  const config = definePlaygroundViteConfig({
    defaultEmitter: "@typespec/openapi3",
    libraries: [
      "@typespec/compiler",
      "@typespec/http",
      "@typespec/rest",
      "@typespec/openapi",
      "@typespec/openapi3",
      "@typespec/versioning"
    ],
    links: {
      documentationUrl: "https://microsoft.github.io/typespec",
    },
  });
  return config;
});
