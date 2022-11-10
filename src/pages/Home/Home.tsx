import React from 'react'
import useHome from './useHome.hook';

export const Home: React.FC = () => {

	useHome()

	return (
		<div data-testid="home-main">
		</div>
	)
}