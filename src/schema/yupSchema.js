import * as yup from "yup";

export const registerSchema = yup.object().shape({
	email: yup.string().required("Required field").email("Invalid email address"),
	password: yup
		.string()
		.required("Required field")
		.min(3, "Password is too short")
		.max(30, "Password is too long"),
	userName: yup
		.string()
		.required("Required field")
		.min(3, "User Name can't be so short"),
});

export const loginSchema = yup.object().shape({
	loginEmail: yup.string().required("Required field").email("Invalid email address"),
	loginPassword: yup
		.string()
		.required("Required field")
		.min(3, "Password is too short")
		.max(30, "Password is too long"),
});
