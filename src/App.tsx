import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';

import { RouterConfig } from 'routes';

import useApp from 'useApp.hook';

const App: React.FC = () => {

	const { config } = useApp()

	return (
		<div data-testid="app">
			<ThemeProvider theme={config.theme}>
				<RouterProvider router={RouterConfig} />
			</ThemeProvider>
		</div>
	);
}

export default App;
