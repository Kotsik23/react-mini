import Logo from "../assets/logo.png";
import { Stack, useTheme, useMediaQuery, IconButton, Skeleton } from "@mui/material";
import { Link as NavLink } from "react-router-dom";
import { ImageContainer } from "../styles/header";
import { globals } from "../styles/globals";
import { routes } from "../routes";
import MenuIcon from "@mui/icons-material/Menu";
import NavItems from "./NavItems";
import { useAuth } from "../hook/useAuth";
import LogoutButton from "./LogoutButton";
import GetStartedButton from "./GetStartedButton";

const Header = ({ toggleDrawer, handleOpenSnackbar }) => {
	const theme = useTheme();
	const upMd = useMediaQuery(theme.breakpoints.up("md"));
	const auth = useAuth();

	return (
		<Stack
			component={"header"}
			direction={"row"}
			alignItems={"center"}
			position={"sticky"}
			top={0}
			zIndex={999}
			bgcolor={"info.main"}
			sx={{
				p: {
					sm: `0.3rem ${globals.paddingX}`,
					xs: `0.25rem calc(${globals.paddingX} / 2.2)`,
				},
			}}
		>
			<ImageContainer width={60} marginRight={"3rem"} minWidth={"60px"}>
				<NavLink to={routes.MAIN_PAGE}>
					<img alt={"logo"} src={Logo} />
				</NavLink>
			</ImageContainer>

			{upMd ? (
				<>
					<NavItems direction={"row"} />

					{auth.isLoaded ? (
						<Skeleton
							animation={"pulse"}
							width={150}
							height={50}
							sx={{ ml: "auto" }}
						/>
					) : (
						<Stack ml={"auto"} width={150}>
							{auth.user ? (
								<LogoutButton handleOpenSnackbar={handleOpenSnackbar} />
							) : (
								<GetStartedButton />
							)}
						</Stack>
					)}
				</>
			) : (
				<>
					<IconButton sx={{ ml: "auto" }} onClick={toggleDrawer}>
						<MenuIcon sx={{ fontSize: 32, color: "#000000" }} />
					</IconButton>
				</>
			)}
		</Stack>
	);
};

export default Header;
