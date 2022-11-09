import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './default.css';

function App() {

	const theme = createTheme({
	});

	return (
		<ThemeProvider theme={theme}>
		</ThemeProvider>
	);
}

export default App;
