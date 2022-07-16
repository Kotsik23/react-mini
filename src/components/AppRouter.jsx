import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "../routes";
import RequireAuth from "../hoc/RequireAuth";
import Main from "../pages/Main";
import Users from "../pages/Users";
import Authentication from "../pages/Authentication";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

const AppRouter = ({ handleOpenSnackbar }) => {
	return (
		<Routes>
			<Route path={routes.MAIN_PAGE} exact element={<Main />} />
			<Route path={routes.USERS_PAGE} exact element={<Users />} />
			<Route
				path={routes.AUTH_PAGE}
				exact
				element={<Authentication handleOpenSnackbar={handleOpenSnackbar} />}
			/>
			<Route
				path={routes.PROFILE_PAGE}
				exact
				element={
					<RequireAuth>
						<Profile />
					</RequireAuth>
				}
			/>
			<Route path={routes.NOT_FOUND} element={<NotFound />} />
			<Route path={routes.ANY} element={<Navigate to={routes.NOT_FOUND} />} />
		</Routes>
	);
};

export default AppRouter;
