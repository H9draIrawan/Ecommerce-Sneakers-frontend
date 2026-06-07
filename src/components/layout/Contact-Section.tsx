import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import ContactForm from "../form/Contact-Form";

function ContactSection() {
	return (
		<Box
			id="contact"
			component="section"
			sx={{ pt: { xs: 6, md: 24 }, backgroundColor: "#f8fafc" }}
		>
			<Container maxWidth={false}>
				{/* HEADER SECTION */}
				<Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
					<Typography
						variant="subtitle1"
						sx={{
							color: "#1976d2",
							textTransform: "uppercase",
							letterSpacing: 1.5,
							mb: 1,
							fontSize: { xs: "3vh", md: "1.5vw" },
						}}
					>
						Contact Us
					</Typography>
					<Typography
						variant="h4"
						component="h2"
						sx={{
							fontWeight: 800,
							color: "#1e293b",
							fontSize: { xs: "2.5vh", md: "2.5vw" },
						}}
					>
						Any Questions? Contact Us
					</Typography>
				</Box>

				<Card
					elevation={4}
					sx={{
						p: { xs: 2, sm: 4 },
						width: { xs: "100%", md: "40%" },
						borderRadius: 4,
						border: "1px solid #e2e8f0",
						backgroundColor: "#ffffff",
						margin: "auto",
					}}
				>
					<CardContent>
						<Typography
							variant="h3"
							sx={{
								width: "auto",
								fontWeight: 700,
								color: "#1e293b",
								textAlign: "center",
								mx: "auto",
								mb: 4,
								fontSize: { xs: "2.5vh", md: "2.5vw" },
							}}
						>
							Contact Form
						</Typography>
						<ContactForm />
					</CardContent>
				</Card>
			</Container>
		</Box>
	);
}

export default ContactSection;
