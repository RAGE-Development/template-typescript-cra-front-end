import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';
import { GlobalStyles } from '@mui/material';

import { RouterConfig } from 'routes';

import useApp from 'useApp.hook';

/**
 * rootStyling
 * 
 * - Creates a global style sheet for the application
 */
const rootStyling = (
	<GlobalStyles
		styles={{
			body: {
			},
		}}
	/>
);

const App: React.FC = () => {

	const { config } = useApp()

	return (
		<div data-testid="app">
			<ThemeProvider theme={config.theme}>
				{rootStyling}
				<RouterProvider router={RouterConfig} />
			</ThemeProvider>
		</div>
	);
}

export default App;
