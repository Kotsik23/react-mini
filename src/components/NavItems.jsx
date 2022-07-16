import { Link, Stack } from "@mui/material";
import { navOptions } from "../data/navOptions";
import { motion } from "framer-motion";

const NavItems = ({ direction, fontSize }) => {
	return (
		<Stack direction={direction} alignItems={"center"} gap={"20px"}>
			{navOptions.map((item, index) => (
				<motion.div
					key={item.link}
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ type: "spring", duration: 0.5, delay: index * 0.05 }}
				>
					<Link
						href={item.link}
						underline={"hover"}
						sx={{ fontSize: fontSize || 18 }}
					>
						{item.name}
					</Link>
				</motion.div>
			))}
		</Stack>
	);
};

export default NavItems;
