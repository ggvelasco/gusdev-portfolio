import { Index } from "@/__registry__/index";

export const registryComponents = [
  {
    name: "theme-switcher",
    version: "0.0.0",
    description: "A theme switcher component",
    author: "Gustavo Velasco <gvelasco.dev@gmail.com>",
    license: "MIT",
    dependencies: ["next-themes", "lucide-react"],
    files: [
      {
        name: "theme-switcher",
        description: "A theme switcher component",
        path: "src/registry/theme-switcher/theme-switcher.tsx",
      },
    ],
    docs: "https://gus-portfolio.vercel.app/components/theme-switcher-component",
  },
  {
    name: "flip-sentences",
    version: "0.0.0",
    description: "A component that flips between sentences",
    author: "Gustavo Velasco <gvelasco.dev@gmail.com>",
    license: "MIT",
    dependencies: ["framer-motion"],
    files: [
      {
        name: "flip-sentences",
        description: "A component that flips between sentences",
        path: "src/registry/flip-sentences/flip-sentences.tsx",
      },
    ],
  },
  {
    name: "apple-hello-effect",
    version: "0.0.0",
    description: "An Apple-style hello effect component",
    author: "Gustavo Velasco <gvelasco.dev@gmail.com>",
    license: "MIT",
    dependencies: ["framer-motion"],
    files: [
      {
        name: "apple-hello-effect",
        description: "An Apple-style hello effect component",
        path: "src/registry/apple-hello-effect/apple-hello-effect.tsx",
      },
    ],
    docs: "https://gus-portfolio.vercel.app/components/writing-effect-inspired-by-apple",
  },
  {
    name: "wheel-picker",
    version: "0.0.0",
    description: "A wheel picker component",
    author: "Gustavo Velasco <gvelasco.dev@gmail.com>",
    license: "MIT",
    dependencies: ["@ncdai/react-wheel-picker"],
    files: [
      {
        name: "wheel-picker",
        description: "A wheel picker component",
        path: "src/registry/wheel-picker/wheel-picker.tsx",
      },
    ],
    docs: "https://gus-portfolio.vercel.app/components/react-wheel-picker",
  },
  {
    name: "work-experience",
    version: "0.0.0",
    description: "A work experience component",
    author: "Gustavo Velasco <gvelasco.dev@gmail.com>",
    license: "MIT",
    dependencies: ["framer-motion", "lucide-react"],
    files: [
      {
        name: "work-experience",
        description: "A work experience component",
        path: "src/registry/work-experience/work-experience.tsx",
      },
    ],
    docs: "https://gus-portfolio.vercel.app/components/work-experience-component",
  },
];
