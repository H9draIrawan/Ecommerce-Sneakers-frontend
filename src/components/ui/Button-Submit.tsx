"use client";

import { Button } from "@mui/material";

interface Props {
	name: string;
}

function ButtonSubmit(props: Props) {
	return (
		<Button
			type="submit"
			sx={{
				backgroundColor: "#2196f3",
				color: "#fff",
				width: "auto",
				fontSize: "2vh",
				fontWeight: "bold",
				px: 4,
			}}
		>
			{props.name}
		</Button>
	);
}

export default ButtonSubmit;
