"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ButtonBack() {
	const navigate = useNavigate();
	return (
		<Button
			onClick={() => navigate(-1)}
			sx={{
				fontSize: "2vh",
				fontWeight: "bold",
				alignSelf: "flex-start",
				justifyContent: "flex-start",
			}}
		>
			<ArrowBackIcon sx={{ fontSize: "5vh" }} />
		</Button>
	);
}

export default ButtonBack;
