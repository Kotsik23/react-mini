import { Button, CircularProgress, Stack, TextField, Typography } from "@mui/material";
import { useAuth } from "../hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../routes";
import { useFormik } from "formik";
import { authApi } from "../api/auth";
import { loginSchema } from "../schema/yupSchema";

function capitalize(s) {
	return s && s[0].toUpperCase() + s.slice(1);
}

const LoginForm = ({ handleOpenSnackbar }) => {
	const auth = useAuth();

	const navigate = useNavigate();
	const location = useLocation();

	const fromPage = location.state?.from?.pathname || routes.MAIN_PAGE;

	const formik = useFormik({
		initialValues: {
			loginEmail: "",
			loginPassword: "",
		},
		onSubmit: async (values, { setSubmitting }) => {
			try {
				const authData = {
					email: values.loginEmail,
					password: values.loginPassword,
				};
				const { data } = await authApi.login(authData);

				auth.setUser(data.user);
				auth.setToken(data.token);

				setSubmitting(false);
				handleOpenSnackbar("success", "Successfully logged in.");
				navigate(fromPage, { replace: true });
			} catch (error) {
				const errors = error?.response?.data?.errors;
				const values = Object.values(errors);
				let [errorMessage] = values;
				errorMessage = capitalize(errorMessage.replace(/([a-z](?=[A-Z]))/g, "$1 "));
				handleOpenSnackbar("error", errorMessage + ".");
			}
		},
		validationSchema: loginSchema,
	});
	return (
		<Stack alignItems={"center"} gap={2}>
			<Typography variant={"h4"} fontWeight={600} mb={2}>
				Login
			</Typography>
			<TextField
				fullWidth
				variant={"outlined"}
				label={"Email"}
				name={"loginEmail"}
				value={formik.values.loginEmail}
				onChange={formik.handleChange}
				error={formik.touched.loginEmail && !!formik.errors.loginEmail}
				helperText={formik.touched.loginEmail && formik.errors.loginEmail}
				onBlur={formik.handleBlur}
			/>
			<TextField
				fullWidth
				variant={"outlined"}
				label={"Password"}
				name={"loginPassword"}
				type={"password"}
				value={formik.values.loginPassword}
				onChange={formik.handleChange}
				error={formik.touched.loginPassword && !!formik.errors.loginPassword}
				helperText={formik.touched.loginPassword && formik.errors.loginPassword}
				onBlur={formik.handleBlur}
			/>
			<Button
				variant={"contained"}
				fullWidth
				type={"submit"}
				onClick={formik.handleSubmit}
				disabled={formik.isSubmitting}
			>
				{formik.isSubmitting ? (
					<CircularProgress size={24} />
				) : (
					<Typography variant={"body1"}>Sign in</Typography>
				)}
			</Button>
		</Stack>
	);
};

export default LoginForm;
