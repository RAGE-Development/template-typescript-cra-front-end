import { createBrowserRouter } from "react-router-dom";
import type { RouteObject as IRouteObject } from "react-router-dom";

import { Home, NotFound } from 'pages';
import { wrapWithHelmet } from 'components/seo';


type IRoute = IRouteObject & {
	title: string;
	description: string;
	authenticated: boolean;
}

const routes: { [key: string]: IRoute } = {
	"default": {
		id: 'default',
		title: 'Home',
		description: 'Home page',
		index: true,
		path: "/",
		element: wrapWithHelmet(Home),
		authenticated: false,
	},
	"404": {
		id: '404',
		title: 'Page Not Found',
		description: 'Not found',
		path: "*",
		element: wrapWithHelmet(NotFound),
		authenticated: false,
	}
}

// type Keys = keyof typeof routes;

export const getRouteData = (id: string): Omit<IRoute, keyof IRouteObject> => {

	if (id in routes) {
		return routes[id];
	}

	throw new Error(`[D] Route with id ${id} not found`);
}

export const RouterConfig = createBrowserRouter(Object.values(routes));


