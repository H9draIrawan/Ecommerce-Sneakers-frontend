import { Box, Container, Paper, Typography } from "@mui/material";
import ActivationForm from "../components/form/Activation-Form";
import ButtonBack from "../components/ui/Button-Back";

export default function Activation() {
	return (
		<Container component="main" maxWidth="sm">
			<Box
				sx={{
					marginBlock: 10,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Paper
					elevation={6}
					sx={{
						padding: 4,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						borderRadius: 2,
						width: "100%",
					}}
				>
					<ButtonBack />
					<Typography
						component="h1"
						variant="h5"
						align="center"
						gutterBottom
						sx={{
							fontSize: "3.5vh",
							fontWeight: "bold",
							paddingBlock: 2,
						}}
					>
						ACTIVATION
					</Typography>
					<ActivationForm />
				</Paper>
			</Box>
		</Container>
	);
}
