import { Divider, Grid, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { PageContainer } from "../styles/globals";
import { motion } from "framer-motion";
import RegistrationForm from "../components/RegistrationForm";
import LoginForm from "../components/LoginForm";

const Authentication = ({ handleOpenSnackbar }) => {
	const theme = useTheme();
	const upSm = useMediaQuery(theme.breakpoints.up("sm"));

	return (
		<PageContainer margin={"auto"}>
			<motion.div
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5, type: "spring" }}
				style={{
					maxWidth: 900,
					width: "100%",
				}}
			>
				<Paper sx={{ borderRadius: theme.shape.borderRadius }} elevation={3}>
					<Grid
						container
						columns={{ sm: 13, xs: 12 }}
						justifyContent={"center"}
						sx={{
							p: { sm: "2rem 2.5rem", xs: "1rem 1.25rem" },
						}}
					>
						<Grid item sm={6} xs={12}>
							<RegistrationForm handleOpenSnackbar={handleOpenSnackbar} />
						</Grid>
						<Grid item sm={1} xs={12}>
							<Divider
								orientation={upSm ? "vertical" : "horizontal"}
								sx={{
									width: "100%",
									my: { sm: 0, xs: 2 },
								}}
							>
								<Typography variant={"subtitle1"} color={"text.secondary"}>
									OR
								</Typography>
							</Divider>
						</Grid>
						<Grid item sm={6} xs={12}>
							<LoginForm handleOpenSnackbar={handleOpenSnackbar} />
						</Grid>
					</Grid>
				</Paper>
			</motion.div>
		</PageContainer>
	);
};

export default Authentication;
