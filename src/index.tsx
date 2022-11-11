import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { FirebaseAppProvider } from 'reactfire';
import CssBaseline from '@mui/material/CssBaseline';
import { HelmetProvider } from 'react-helmet-async';
import { StyledEngineProvider } from '@mui/material/styles';

import { Store } from 'store';
import { firebaseConfig, FirebaseSDKWrapper } from 'services/firebase';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<FirebaseAppProvider firebaseConfig={firebaseConfig}>
			<FirebaseSDKWrapper>
				<StyledEngineProvider injectFirst>
					<Provider store={Store}>
						<HelmetProvider>
							<CssBaseline enableColorScheme />
							<App />
						</HelmetProvider>
					</Provider>
				</StyledEngineProvider>
			</FirebaseSDKWrapper>
		</FirebaseAppProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
