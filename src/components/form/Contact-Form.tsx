"use client";

import { Grid, TextField } from "@mui/material";
import { Form } from "react-router-dom";
import ButtonSubmit from "../ui/Button-Submit";

function ContactForm() {
	return (
		<Form method="POST" noValidate>
			<Grid container spacing={2.5}>
				<Grid size={6}>
					<TextField
						fullWidth
						label="Your Name"
						name="name"
						variant="outlined"
						type="text"
					/>
				</Grid>
				<Grid size={6}>
					<TextField
						fullWidth
						label="Your Email"
						name="email"
						variant="outlined"
						type="email"
					/>
				</Grid>
				<Grid size={12}>
					<TextField
						fullWidth
						label="Subject"
						name="subject"
						variant="outlined"
						type="text"
					/>
				</Grid>
				<Grid size={12}>
					<TextField
						fullWidth
						label="Your Message"
						name="message"
						multiline
						rows={8}
						variant="outlined"
						type="text"
					/>
				</Grid>
				<Grid size={12}>
					<ButtonSubmit name="Send message" />
				</Grid>
			</Grid>
		</Form>
	);
}

export default ContactForm;
