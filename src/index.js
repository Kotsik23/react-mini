import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { AuthProvider } from "./hoc/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<ThemeProvider theme={theme}>
			<AuthProvider>
				<App />
			</AuthProvider>
		</ThemeProvider>
	</BrowserRouter>
);
