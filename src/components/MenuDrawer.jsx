import { Divider, Drawer, IconButton, Skeleton, Stack, useTheme } from "@mui/material";
import { Link as NavLink } from "react-router-dom";
import { routes } from "../routes";
import Logo from "../assets/logo.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { ImageContainer } from "../styles/header";
import NavItems from "./NavItems";
import LogoutButton from "./LogoutButton";
import GetStartedButton from "./GetStartedButton";
import { useAuth } from "../hook/useAuth";

const MenuDrawer = ({ openDrawer, toggleDrawer }) => {
	const theme = useTheme();
	const auth = useAuth();
	return (
		<Drawer anchor={"right"} open={openDrawer} onClose={toggleDrawer}>
			<Stack
				width={300}
				onClick={toggleDrawer}
				alignItems={"center"}
				justifyContent={"space-between"}
				gap={"20px"}
				minHeight={"100vh"}
				position={"relative"}
				sx={{
					overflowY: "auto",
					bgcolor: theme.palette.info.main,
				}}
				color={theme.palette.text.primary}
			>
				<IconButton
					onClick={toggleDrawer}
					sx={{ position: "absolute", top: 10, left: 10 }}
				>
					<KeyboardArrowRightIcon sx={{ color: "#000000", fontSize: 32 }} />
				</IconButton>
				<Stack width={"100%"} alignItems={"center"}>
					<NavLink to={routes.MAIN_PAGE}>
						<ImageContainer width={100} minWidth={"100px"}>
							<img alt={"logo"} src={Logo} />
						</ImageContainer>
					</NavLink>
					<Divider sx={{ width: "100%", my: 2 }} />
					<NavItems direction={"column"} fontSize={24} />
					<Divider sx={{ width: "100%", my: 2 }} />
				</Stack>

				<Stack pb={"1rem"} width={"100%"} gap={"12px"} alignItems={"center"}>
					<Divider sx={{ width: "100%", my: 2 }} />
					{auth.isLoaded ? (
						<Skeleton
							animation={"pulse"}
							width={150}
							height={50}
							sx={{ ml: "auto" }}
						/>
					) : (
						<Stack width={200}>
							{auth.user ? <LogoutButton /> : <GetStartedButton />}
						</Stack>
					)}
				</Stack>
			</Stack>
		</Drawer>
	);
};

export default MenuDrawer;
