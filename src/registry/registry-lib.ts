import { Index } from "@/__registry__/index";

export const registryLib = {
  name: "utils",
  version: "0.0.0",
  description: "Utility functions for the portfolio",
  author: "Gustavo Velasco <gvelasco.dev@gmail.com>",
  license: "MIT",
  files: [
    {
      name: "use-controllable-state",
      description: "A React hook for creating controllable state",
      dependencies: [],
      files: [
        {
          name: "use-controllable-state",
          description: "A React hook for creating controllable state",
          path: "src/hooks/use-controllable-state.ts",
        },
      ],
    },
  ],
};
