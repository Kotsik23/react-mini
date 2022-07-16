import { Button } from "@mui/material";
import { Link as NavLink } from "react-router-dom";
import { routes } from "../routes";
import { motion } from "framer-motion";

const GetStartedButton = () => {
	return (
		<motion.div
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{ type: "spring", duration: 0.5 }}
			style={{
				width: "100%",
				display: "flex",
			}}
		>
			<Button
				variant={"contained"}
				fullWidth
				component={NavLink}
				to={routes.AUTH_PAGE}
			>
				Get Started
			</Button>
		</motion.div>
	);
};

export default GetStartedButton;
