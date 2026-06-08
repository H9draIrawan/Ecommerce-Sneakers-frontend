"use client";

import { Grid, TextField, Typography } from "@mui/material";
import { Form, useActionData } from "react-router-dom";
import ButtonSubmit from "../ui/Button-Submit";

function RegisterForm() {
	const actionData = useActionData();
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
						type="password"
					/>
				</Grid>
				{/* <Grid size={12}>
					<FormControlLabel
						name="agreeTerms"
						control={<Checkbox name="agreeTerms" color="primary" />}
						label={
							<Typography variant="body1">
								I agree to the terms and conditions
							</Typography>
						}
					/>
				</Grid> */}
				<Grid size={12}>
					<ButtonSubmit name="Register" />
				</Grid>
				{actionData?.error && (
					<Grid size={12}>
						<Typography variant="body1" color="error">
							{actionData.error}
						</Typography>
					</Grid>
				)}
			</Grid>
		</Form>
	);
}

export default RegisterForm;
