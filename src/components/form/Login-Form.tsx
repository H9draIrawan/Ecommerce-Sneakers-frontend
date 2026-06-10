"use client";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
	Checkbox,
	FormControlLabel,
	Grid,
	IconButton,
	InputAdornment,
	TextField,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { Form, useActionData } from "react-router-dom";
import ButtonSubmit from "../ui/Button-Submit";

function LoginForm() {
	const actionData = useActionData();
	const [showPassword, setShowPassword] = useState(false);
	return (
		<Form method="POST" noValidate className="flex flex-col gap-4 md:w-4/5">
			<TextField fullWidth label="Email" name="email" type="email" />
			<TextField
				fullWidth
				label="Password"
				name="email"
				type={showPassword ? "text" : "password"}
				slotProps={{
					input: {
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									onClick={() => setShowPassword(!showPassword)}
									edge="end"
								>
									{showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
								</IconButton>
							</InputAdornment>
						),
					},
				}}
			/>
			<FormControlLabel
				control={<Checkbox name="rememberMe" color="primary" />}
				label="Remember me"
				sx={{ my: 1 }}
			/>
			<ButtonSubmit name="Login" />
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

export default LoginForm;
