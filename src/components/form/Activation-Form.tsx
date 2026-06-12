import { Grid, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { Form } from "react-router-dom";
import ButtonSubmit from "../ui/Button-Submit";

export default function ActivationForm() {
	const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
	const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

	const handleChange = (element: HTMLInputElement, index: number) => {
		const value = element.value;
		const newOtp = [...otp];

		newOtp[index] = value.substring(value.length - 1);
		setOtp(newOtp);

		if (value && index < 5) {
			inputRefs.current[index + 1]?.focus();
		}
	};

	const handleKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>,
		index: number,
	) => {
		if (e.key === "Backspace" && !otp[index] && index > 0) {
			inputRefs.current[index - 1]?.focus();
		}
	};

	return (
		<Form noValidate method="POST">
			<Grid container spacing={1} sx={{ justifyContent: "center" }}>
				{otp.map((value, index) => (
					<Grid size={2} key={index}>
						<TextField
							inputRef={(el: HTMLInputElement | null) => {
								inputRefs.current[index] = el;
							}}
							type="text"
							name="otp"
							variant="outlined"
							slotProps={{
								htmlInput: {
									maxLength: 1,
									style: { textAlign: "center" },
								},
							}}
							value={value}
							onChange={(e) =>
								handleChange(e.target as HTMLInputElement, index)
							}
							onKeyDown={(e) =>
								handleKeyDown(e as React.KeyboardEvent<HTMLInputElement>, index)
							}
						/>
					</Grid>
				))}
				<ButtonSubmit name="Submit" />
			</Grid>
		</Form>
	);
}
