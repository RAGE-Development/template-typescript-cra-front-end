import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type tTheme = 'dark'
export type tLocale = 'en' | 'es'

export interface ISiteConfigurationState {
	theme: tTheme
	locale: tLocale
}

const initialState: ISiteConfigurationState = {
	theme: 'dark',
	locale: 'en',
}

export const sliceSiteConfiguration = createSlice({
	name: 'siteConfiguration',
	initialState,
	reducers: {
		actionChangeTheme: (state, action: PayloadAction<tTheme>) => {
			state.theme = action.payload
		},
		actionChangeLocale: (state, action: PayloadAction<tLocale>) => {
			state.locale = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { actionChangeTheme, actionChangeLocale } = sliceSiteConfiguration.actions

export default sliceSiteConfiguration.reducer