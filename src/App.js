import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import { useState } from "react";
import MenuDrawer from "./components/MenuDrawer";
import CustomSnackbar from "./components/CustomSnackbar";

const App = () => {
	const [openDrawer, setOpenDrawer] = useState(false);

	const toggleDrawer = () => {
		setOpenDrawer(!openDrawer);
	};

	const [openSnackbar, setOpenSnackbar] = useState(false);
	const [severity, setSeverity] = useState("success");
	const [snackText, setSnackText] = useState("");

	const handleOpenSnackbar = (severity, text) => {
		setOpenSnackbar(true);
		setSeverity(severity);
		setSnackText(text);
	};

	const handleCloseSnackbar = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpenSnackbar(false);
	};

	return (
		<>
			<Header toggleDrawer={toggleDrawer} handleOpenSnackbar={handleOpenSnackbar} />
			<main>
				<AppRouter handleOpenSnackbar={handleOpenSnackbar} />
			</main>
			<MenuDrawer openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
			<CustomSnackbar
				handleCloseSnackbar={handleCloseSnackbar}
				openSnackbar={openSnackbar}
				severity={severity}
				snackText={snackText}
			/>
		</>
	);
};

export default App;
