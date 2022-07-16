import { useAuth } from "../hook/useAuth";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import LogoutIcon from "@mui/icons-material/Logout";

const LogoutButton = ({ handleOpenSnackbar }) => {
	const auth = useAuth();
	const navigate = useNavigate();

	const handleLogOut = () => {
		auth.signOut();
		handleOpenSnackbar("success", "Successfully logged out.");
		navigate(routes.MAIN_PAGE);
	};

	return (
		<motion.div
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{ type: "spring", duration: 0.5 }}
			style={{ width: "100%" }}
		>
			<Button
				variant={"contained"}
				onClick={handleLogOut}
				fullWidth
				endIcon={<LogoutIcon />}
			>
				Sign Out
			</Button>
		</motion.div>
	);
};

export default LogoutButton;
