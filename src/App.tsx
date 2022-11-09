import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import { useAppSelector } from 'store';
import useTheme from 'config/theme';

function App() {

	const selectedTheme = useAppSelector((state) => state.siteConfiguration.theme)
	const theme = useTheme(selectedTheme)

	return (
		<ThemeProvider theme={theme}>
		</ThemeProvider>
	);
}

export default App;
