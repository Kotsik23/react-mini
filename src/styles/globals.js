import { Box, styled } from "@mui/material";

export const globals = {
	paddingX: "3rem",
};

export const PageContainer = styled(Box)(({ props }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	minHeight: "100vh",
	...props,
}));
