import { Box, styled } from "@mui/material";

export const ImageContainer = styled(Box)(({ width, props }) => ({
	maxWidth: width,
	"& img": {
		width: "100%",
		height: "auto",
	},
	...props,
}));
