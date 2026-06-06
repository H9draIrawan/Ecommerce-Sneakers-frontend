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
				width: "15vh",
				fontSize: "2vh",
				fontWeight: "bold",
			}}
		>
			{props.name}
		</Button>
	);
}

export default ButtonSubmit;
