import { Link, Stack, useTheme } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";

const Socials = () => {
	const theme = useTheme();
	return (
		<Stack
			direction={"row"}
			alignItems={"center"}
			flexWrap={"wrap"}
			spacing={2}
			sx={{
				"& > a": {
					cursor: "pointer",
				},
				"& svg": {
					color: theme.palette.text.secondary,
					transition: "color .2s ease-in-out",
					"&:hover": {
						color: theme.palette.primary.main,
					},
				},
			}}
		>
			<Link href={"https://twitter.com/"} target={"_blank"}>
				<TwitterIcon />
			</Link>
			<Link href={"https://www.instagram.com/"} target={"_blank"}>
				<InstagramIcon />
			</Link>
			<Link href={"https://www.facebook.com/"} target={"_blank"}>
				<FacebookIcon />
			</Link>
			<Link href={"https://www.youtube.com/"} target={"_blank"}>
				<YouTubeIcon />
			</Link>
			<Link href={"https://telegram.org/"} target={"_blank"}>
				<TelegramIcon />
			</Link>
		</Stack>
	);
};

export default Socials;
