import { tTheme } from "store/slices"
import type { Theme } from "@mui/material"

import darkTheme from "./darkTheme"

type ThemeMap = { [K in tTheme]: Theme }

const themes: ThemeMap = {
	'dark': darkTheme,
}

const useTheme = (theme: tTheme) => {
	return themes[theme]
}

export default useTheme