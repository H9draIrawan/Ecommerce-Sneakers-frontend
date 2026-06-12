"use client";

import { Button } from "@mui/material";
import { useFormStatus } from "react-dom";

function ButtonSubmit(props: { name: string }) {
	const { pending } = useFormStatus();
	return (
		<Button
			type="submit"
			sx={{
				backgroundColor: "#2196f3",
				color: "#fff",
				fontSize: "2vh",
				fontWeight: "bold",
				px: 4,
				mt: 2,
			}}
			disabled={pending}
		>
			{props.name}
		</Button>
	);
}

export default ButtonSubmit;
