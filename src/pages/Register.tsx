import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import { Avatar, Box, Container, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import RegisterForm from "../components/form/Register-Form";
import ButtonBack from "../components/ui/Button-Back";

export default function Register() {
	return (
		<Container component="main" maxWidth="sm">
			<Box
				sx={{
					marginBlock:10,
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
					<Avatar sx={{ m: 1, bgcolor: "primary.main", width: 56, height: 56 }}>
						<PersonAddOutlinedIcon fontSize="large" />
					</Avatar>
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
						REGISTER
					</Typography>
					<RegisterForm />
					<Typography variant="body1" sx={{ pt: 4 }}>
						Already have an account?{" "}
						<Link to="/login" className="text-blue-500">
							Login
						</Link>
					</Typography>
				</Paper>
			</Box>
		</Container>
	);
}
