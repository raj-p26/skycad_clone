import { writable } from "svelte/store";

type ThemeMode = "light" | "dark";

export const themeStore = writable<ThemeMode>("light");
