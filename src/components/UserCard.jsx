import { Button, Paper, Skeleton, Stack, Typography, useTheme } from "@mui/material";
import { ImageContainer } from "../styles/header";
import Socials from "./Socials";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const UserCard = ({ firstName, lastName, email, avatar }) => {
	const [isShowActions, setShowActions] = useState(false);
	const [isLoadedImage, setIsLoadedImage] = useState(false);

	const handleShow = () => {
		setShowActions(true);
	};

	const handleHide = () => {
		setShowActions(false);
	};

	const theme = useTheme();
	return (
		<motion.div
			initial={{ scale: 1, y: 200, opacity: 0 }}
			whileHover={{ scale: 1.05 }}
			whileInView={{
				y: 0,
				opacity: 1,
			}}
			transition={{
				type: "spring",
				duration: 0.5,
			}}
			viewport={{ once: true, margin: "150px" }}
		>
			<Paper
				onMouseEnter={handleShow}
				onMouseLeave={handleHide}
				elevation={3}
				sx={{
					height: 480,
					width: 300,
					borderRadius: theme.shape.borderRadius,
					bgcolor: theme.palette.info.light,
					overflow: "hidden",
				}}
			>
				<Stack
					alignItems={"center"}
					p={"1.5rem 0"}
					sx={{
						background:
							"linear-gradient(0deg, rgba(132,154,198,1) 0%, rgba(98,112,191,1) 100%)",
						borderRadius: `70%/0 0 30px 30px;`,
						borderTopLeftRadius: "19px",
						borderTopRightRadius: "19px",
					}}
				>
					<ImageContainer width={125} overflow={"hidden"}>
						{!isLoadedImage && (
							<Skeleton width={125} height={125} variant={"circular"} />
						)}
						<img
							alt={"avatar"}
							src={avatar.large}
							style={{
								borderRadius: "50%",
								display: isLoadedImage ? "flex" : "none",
							}}
							onLoad={() => setIsLoadedImage(true)}
						/>
					</ImageContainer>
				</Stack>
				<Stack alignItems={"center"} mt={3} color={"text.secondary"} gap={"15px"}>
					<Typography variant={"h5"}>
						{firstName} {lastName}
					</Typography>
					<Typography variant={"body1"}>{email}</Typography>
					<Socials />
					<Typography variant={"body2"} maxWidth={"200px"} textAlign={"center"}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita illo
						iste optio quas reiciendis sed?
					</Typography>

					<AnimatePresence exitBeforeEnter>
						{isShowActions && (
							<motion.div
								initial={{ scale: 0.3 }}
								animate={{ scale: 1, opacity: 1 }}
								exit={{ scale: 0.5, opacity: 0 }}
							>
								<Stack
									direction={"row"}
									alignItems={"center"}
									gap={2}
									sx={{
										"& > .MuiButton-root": {
											textTransform: "none",
										},
									}}
								>
									<Button
										variant={"outlined"}
										endIcon={<KeyboardArrowRightIcon />}
									>
										Go to Profile
									</Button>
									<Button variant={"outlined"} endIcon={<EditIcon />}>
										Edit
									</Button>
								</Stack>
							</motion.div>
						)}
					</AnimatePresence>
				</Stack>
			</Paper>
		</motion.div>
	);
};

export default UserCard;
