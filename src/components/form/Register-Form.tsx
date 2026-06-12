"use client";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
	Grid,
	IconButton,
	InputAdornment,
	TextField,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { Form, useActionData } from "react-router-dom";
import ButtonSubmit from "../ui/Button-Submit";

function RegisterForm() {
	const actionData = useActionData();
	const [showPassword, setShowPassword] = useState(false);
	return (
		<Form method="POST" noValidate className="flex flex-col gap-4 md:w-4/5">
			<Grid container spacing={2}>
				<Grid size={6}>
					<TextField fullWidth label="First Name" name="fname" type="text" />
				</Grid>
				<Grid size={6}>
					<TextField fullWidth label="Last Name" name="lname" type="text" />
				</Grid>
				<Grid size={12}>
					<TextField fullWidth label="Email" name="email" type="email" />
				</Grid>
				<Grid size={12}>
					<TextField fullWidth label="Username" name="username" type="text" />
				</Grid>
				<Grid size={12}>
					<TextField
						fullWidth
						label="Password"
						name="password"
						type={showPassword ? "text" : "password"}
						slotProps={{
							input: {
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											onClick={() => setShowPassword(!showPassword)}
											edge="end"
										>
											{showPassword ? (
												<VisibilityIcon />
											) : (
												<VisibilityOffIcon />
											)}
										</IconButton>
									</InputAdornment>
								),
							},
						}}
					/>
				</Grid>
			</Grid>
			<ButtonSubmit name="Register" />
			{actionData?.error && (
				<Grid size={12}>
					<Typography variant="body1" color="error">
						{actionData.error}
					</Typography>
				</Grid>
			)}
		</Form>
	);
}

export default RegisterForm;
