import { Button, CircularProgress, Stack, TextField, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { useAuth } from "../hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../routes";
import { useState } from "react";
import { useFormik } from "formik";
import { authApi } from "../api/auth";
import { registerSchema } from "../schema/yupSchema";

const RegistrationForm = ({ handleOpenSnackbar }) => {
	const auth = useAuth();

	const navigate = useNavigate();
	const location = useLocation();

	const fromPage = location.state?.from?.pathname || routes.MAIN_PAGE;

	const [selectedImage, setSelectedImage] = useState(null);

	const formik = useFormik({
		initialValues: {
			userName: "",
			email: "",
			password: "",
		},
		onSubmit: async (values, { setSubmitting }) => {
			try {
				const authData = {
					email: values.email,
					password: values.password,
					firstName: values.userName,
					lastName: values.userName,
				};
				await authApi.registration(authData);

				const { data } = await authApi.login({
					email: authData.email,
					password: authData.password,
				});

				auth.setUser(data.user);
				auth.setToken(data.token);

				setSubmitting(false);
				handleOpenSnackbar("success", "Account was successfully created.");
				navigate(fromPage, { replace: true });
			} catch (error) {
				console.log(error);
			}
		},
		validationSchema: registerSchema,
	});
	return (
		<Stack alignItems={"center"} gap={2}>
			<Typography variant={"h4"} fontWeight={600} mb={2}>
				Register
			</Typography>
			<TextField
				fullWidth
				variant={"outlined"}
				label={"User Name"}
				name={"userName"}
				value={formik.values.userName}
				onChange={formik.handleChange}
				error={formik.touched.userName && !!formik.errors.userName}
				helperText={formik.touched.userName && formik.errors.userName}
				onBlur={formik.handleBlur}
			/>
			<TextField
				fullWidth
				variant={"outlined"}
				label={"Email"}
				name={"email"}
				value={formik.values.email}
				onChange={formik.handleChange}
				error={formik.touched.email && !!formik.errors.email}
				helperText={formik.touched.email && formik.errors.email}
				onBlur={formik.handleBlur}
			/>
			<TextField
				fullWidth
				variant={"outlined"}
				label={"Password"}
				name={"password"}
				type={"password"}
				value={formik.values.password}
				onChange={formik.handleChange}
				error={formik.touched.password && !!formik.errors.password}
				helperText={formik.touched.password && formik.errors.password}
				onBlur={formik.handleBlur}
			/>
			<Button
				variant={selectedImage ? "contained" : "outlined"}
				component="label"
				fullWidth
				endIcon={selectedImage ? <CheckIcon /> : <InsertPhotoIcon />}
				color={selectedImage ? "success" : "primary"}
			>
				Upload
				<input
					hidden
					accept="image/*"
					type="file"
					onChange={(event) => {
						setSelectedImage(event.target.files[0]);
					}}
				/>
			</Button>
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
					<Typography variant={"body1"}>Sign up</Typography>
				)}
			</Button>
		</Stack>
	);
};

export default RegistrationForm;
