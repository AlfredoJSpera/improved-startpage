import { defaultMocha, defaultLatte, Palette } from "./palette";

export const LOCALSTORAGE_CURRENT_PALETTE_KEY = "currentPalette";
export const LOCALSTORAGE_STORED_PALETTES_KEY = "allPalettes";

export const DEFAULT_PALETTES: Record<string, Palette> = {
	"Catppuccin Mocha": defaultMocha,
	"Catppuccin Latte": defaultLatte,
};
