import { registerMonacoDefaultWorkersForVite } from "@typespec/playground";
import PlaygroundManifest from "@typespec/playground/manifest";
import {
  renderReactPlayground,
} from "@typespec/playground/react";
import "./index.css";

import "@typespec/playground/style.css";

registerMonacoDefaultWorkersForVite();


await renderReactPlayground({
  ...PlaygroundManifest,
  emitterViewers: {
    "@typespec/openapi3": [],
  },
});
