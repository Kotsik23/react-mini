import Main from "../pages/Main";
import Users from "../pages/Users";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import Authentication from "../pages/Authentication";

export const routes = {
	MAIN_PAGE: "/",
	USERS_PAGE: "/users",
	PROFILE_PAGE: "/profile",
	AUTH_PAGE: "/auth",
	NOT_FOUND: "/not_found",
	ANY: "*",
};

export const publicRoutes = [
	{
		path: routes.MAIN_PAGE,
		exact: true,
		element: <Main />,
	},
	{
		path: routes.USERS_PAGE,
		element: <Users />,
	},
	{
		path: routes.ANY,
		element: <NotFound />,
	},
	{
		path: routes.AUTH_PAGE,
		element: <Authentication />,
	},
];

export const privateRoutes = [
	{
		path: routes.PROFILE_PAGE,
		element: <Profile />,
	},
];
