import { Alert, Snackbar } from "@mui/material";

const CustomSnackbar = ({ openSnackbar, handleCloseSnackbar, severity, snackText }) => {
	return (
		<Snackbar
			open={openSnackbar}
			autoHideDuration={5000}
			onClose={handleCloseSnackbar}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			sx={{ mt: 8 }}
		>
			<Alert
				onClose={handleCloseSnackbar}
				severity={severity}
				variant={"filled"}
				sx={{ width: 300 }}
			>
				{snackText}
			</Alert>
		</Snackbar>
	);
};

export default CustomSnackbar;
