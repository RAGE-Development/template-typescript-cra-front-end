import React from 'react'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'
import { AuthProvider, useFirebaseApp, AnalyticsProvider } from 'reactfire';


export const FirebaseSDKWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {

	// Get primary app
	const app = useFirebaseApp();

	// Get auth instance
	const auth = getAuth(app);

	// Get analytics instance
	const analytics = getAnalytics(app);

	// Validate environment
	if (process.env.NODE_ENV !== 'production') {
		// Set up emulators
		connectAuthEmulator(auth, 'http://localhost:9099');
	}

	return (
		<AnalyticsProvider sdk={analytics}>
			<AuthProvider sdk={auth}>
				{children}
			</AuthProvider>
		</AnalyticsProvider>
	)
}