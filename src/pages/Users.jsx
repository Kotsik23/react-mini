import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import { globals } from "../styles/globals";
import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { motion } from "framer-motion";
import { usersApi } from "../api/users";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link as NavLink, useLocation } from "react-router-dom";

const Users = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);

	const location = useLocation();

	const PAGE_NUMBER = Number(location.search.split("=")[1]) || 1;

	useEffect(() => {
		const getAllUsers = async () => {
			setLoading(true);
			const usersData = await usersApi.getAll(4, PAGE_NUMBER);
			setUsers([...users, ...usersData.data.results]);
			setLoading(false);
		};

		getAllUsers();
	}, [PAGE_NUMBER]);

	return (
		<Stack p={`3rem ${globals.paddingX}`} alignItems={"center"}>
			<Stack alignItems={"center"} gap={"20px"}>
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, type: "spring" }}
				>
					<Typography variant={"h3"} fontWeight={600}>
						List of All Users
					</Typography>
				</motion.div>
			</Stack>

			<Stack
				direction={"row"}
				alignItems={"center"}
				justifyContent={"center"}
				flexWrap={"wrap"}
				gap={6}
				mt={"3rem"}
			>
				{users.length > 0 ? (
					users.map((user, index) => (
						<UserCard
							key={index}
							firstName={user.name.first}
							lastName={user.name.last}
							email={user.email}
							avatar={user.picture}
						/>
					))
				) : (
					<CircularProgress />
				)}
			</Stack>

			<Button
				variant={"outlined"}
				fullWidth
				sx={{ maxWidth: 300, mt: 6 }}
				endIcon={<ExpandMoreIcon />}
				size={"large"}
				disabled={loading}
				component={NavLink}
				to={`/users/?page=${PAGE_NUMBER + 1}`}
			>
				Load more
			</Button>
		</Stack>
	);
};

export default Users;
