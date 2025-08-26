import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export interface Config {
  theme: "light" | "dark" | "system";
  radius: number;
}

const configAtom = atomWithStorage<Config>("gusdev.config", {
  theme: "system",
  radius: 0.5,
});

export { configAtom };

export function useConfig() {
  return useAtom(configAtom);
}
