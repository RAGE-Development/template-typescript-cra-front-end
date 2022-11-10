import { useEffect } from 'react';
import { useAnalytics } from 'reactfire';
import { logEvent } from 'firebase/analytics';

import { useAppSelector } from 'store';
import useTheme from 'config/theme';
import { useLocation } from 'react-router-dom';

const useApp = () => {
	/** Globals */
	const analytics = useAnalytics();
	const location = useLocation();

	/** States */
	const selectedTheme = useAppSelector((state) => state.siteConfiguration.theme)
	const theme = useTheme(selectedTheme)

	/** Functions */

	/** Effects */

	// Log a new page view, when the window location path changes
	useEffect(() => {
		logEvent(analytics, 'page_view', { page_location: location.pathname });
	}, [location.pathname])

	return {
		config: {
			theme,
		}
	}
}

export default useApp;