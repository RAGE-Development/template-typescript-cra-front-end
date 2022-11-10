import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import useApp from 'useApp.hook';
import { RouterProvider } from 'react-router-dom';
import { RouterConfig } from 'routes';

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
