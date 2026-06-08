"use client";

import { Button } from "@mui/material";
import { useFormStatus } from "react-dom";

interface Props {
	name: string;
}

function ButtonSubmit(props: Props) {
	const { pending } = useFormStatus();
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
			disabled={pending}
		>
			{props.name}
		</Button>
	);
}

export default ButtonSubmit;
