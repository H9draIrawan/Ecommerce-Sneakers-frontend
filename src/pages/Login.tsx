import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Box, Container, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LoginForm from "../components/form/Login-Form";
import ButtonBack from "../components/ui/Button-Back";
export default function Login() {
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
					<Avatar sx={{ m: 1, bgcolor: "primary.main", width: 56, height: 56 }}>
						<LockOutlinedIcon fontSize="large" />
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
						LOGIN
					</Typography>
					<LoginForm />
					<Typography variant="body1" sx={{ pt: 4 }}>
						Don&apos;t have an account?{" "}
						<Link to="/register" className="text-blue-500">
							Register
						</Link>
					</Typography>
				</Paper>
			</Box>
		</Container>
	);
}
