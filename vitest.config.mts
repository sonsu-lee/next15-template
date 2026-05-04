import { join } from "node:path";

import stylex from "@stylexjs/unplugin/rollup";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

const rootDir = import.meta.dirname;

export default defineConfig({
  plugins: [
    stylex({
      useCSSLayers: true,
      dev: process.env.NODE_ENV === "development",
      test: process.env.NODE_ENV === "test",
      runtimeInjection: false,
      enableInlinedConditionalMerge: true,
      treeshakeCompensation: true,
      aliases: {
        "@/*": [join(rootDir, "src", "*")],
      },
      unstable_moduleResolution: {
        type: "commonJS",
        rootDir,
      },
    }),
    react(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    clearMocks: true,
    environment: "jsdom",
    restoreMocks: true,
    setupFiles: ["./vitest.setup.ts"],
  },
});
