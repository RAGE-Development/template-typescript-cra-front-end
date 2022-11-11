import React, { PropsWithChildren } from 'react'
import { Helmet } from 'react-helmet-async';

import { getRouteData } from 'routes'
import { useLocation } from 'react-router-dom';

const HelmetWrapper: React.FC<PropsWithChildren> = ({ children }) => {

	const location = useLocation()
	const route = getRouteData(location.key)

	return (
		<>
			<Helmet>
				<title>{`${route.title}`}</title>
			</Helmet>
			{children}
		</>
	)
}

export const wrapWithHelmet = (Component: React.FC): JSX.Element => {
	return (
		<HelmetWrapper>
			<Component />
		</HelmetWrapper>
	)
}