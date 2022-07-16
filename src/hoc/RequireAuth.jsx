import { useLocation, Navigate } from "react-router-dom";
import { routes } from "../routes";
import { useAuth } from "../hook/useAuth";
import { CircularProgress, Stack } from "@mui/material";

const RequireAuth = ({ children }) => {
	const location = useLocation();
	const { user, isLoaded } = useAuth();

	if (isLoaded) {
		return (
			<Stack alignItems={"center"} justifyContent={"center"} minHeight={"80vh"}>
				<CircularProgress size={45} />
			</Stack>
		);
	} else {
		if (!user) {
			return <Navigate to={routes.AUTH_PAGE} state={{ from: location }} />;
		} else return children;
	}
};

export default RequireAuth;
