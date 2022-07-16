import { createTheme, responsiveFontSizes } from "@mui/material";

export let theme = createTheme({
	palette: {
		primary: {
			main: "#6270bf",
		},
		secondary: {
			main: "#c292de",
		},
		info: {
			main: "#f0eaea",
			light: "#fbf2f2",
		},
	},
	components: {
		MuiLink: {
			styleOverrides: {
				root: {
					color: "#000000",
					fontWeight: 500,
					letterSpacing: 1.05,
				},
			},
		},
	},
});

theme = responsiveFontSizes(theme);
