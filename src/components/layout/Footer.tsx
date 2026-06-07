import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
	Box,
	Button,
	Container,
	Divider,
	Grid,
	IconButton,
	Link,
	Stack,
	TextField,
	Typography,
} from "@mui/material";

function Footer() {
	const companyList = [
		{ name: "About Us", href: "#" },
		{ name: "Contact Us", href: "#" },
		{ name: "Blog", href: "#" },
		{ name: "Terms & Conditions", href: "#" },
		{ name: "Privacy Policy", href: "#" },
	];

	const serviceList = [
		{ name: "Help Center", href: "#" },
		{ name: "Account", href: "#" },
		{ name: "Shipping", href: "#" },
		{ name: "Cancellation", href: "#" },
		{ name: "Returns", href: "#" },
	];
	return (
		<Box
			sx={{
				backgroundColor: "#0f172a",
				color: "#94a3b8",
				mt: { xs: 8, md: 12 },
				py: 4,
			}}
		>
			<Container maxWidth="lg">
				<Grid container spacing={4} sx={{ mb: 6 }}>
					{/* KOLOM 1: Tentang Perusahaan & Sosial Media */}
					<Grid size={{ xs: 12, md: 4 }}>
						<Stack spacing={3}>
							<Typography
								variant="h6"
								sx={{ color: "#ffffff", fontWeight: "bold", letterSpacing: 1 }}
							>
								Primera
							</Typography>
							<Typography
								variant="body2"
								sx={{ lineHeight: 1.7, pr: { md: 4 } }}
							>
								We are a company that sells sneakers. We have a wide selection
								of sneakers from all over the world. You can find the sneakers
								you want here.
							</Typography>
							{/* Media Sosial */}
							<Stack direction="row" spacing={1}>
								{[
									<FacebookIcon />,
									<TwitterIcon />,
									<InstagramIcon />,
									<LinkedInIcon />,
								].map((icon, index) => (
									<IconButton
										key={index}
										size="small"
										sx={{
											color: "#94a3b8",
											backgroundColor: "rgba(255, 255, 255, 0.05)",
											"&:hover": {
												color: "#ffffff",
												backgroundColor: "#1976d2",
											},
										}}
									>
										{icon}
									</IconButton>
								))}
							</Stack>
						</Stack>
					</Grid>

					{/* KOLOM 2: Tautan Navigasi (Perusahaan) */}
					<Grid size={{ xs: 6, sm: 3, md: 2 }}>
						<Typography
							variant="body1"
							sx={{ color: "#ffffff", fontWeight: 700, mb: 2.5 }}
						>
							Company
						</Typography>
						<Stack spacing={1.5}>
							{companyList.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									underline="none"
									sx={{
										color: "#94a3b8",
										fontSize: "0.9rem",
										"&:hover": { color: "#ffffff" },
									}}
								>
									{item.name}
								</Link>
							))}
						</Stack>
					</Grid>

					{/* KOLOM 3: Tautan Navigasi (Layanan) */}
					<Grid size={{ xs: 6, sm: 3, md: 2 }}>
						<Typography
							variant="body1"
							sx={{ color: "#ffffff", fontWeight: 700, mb: 2.5 }}
						>
							Service
						</Typography>
						<Stack spacing={1.5}>
							{serviceList.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									underline="none"
									sx={{
										color: "#94a3b8",
										fontSize: "0.9rem",
										"&:hover": { color: "#ffffff" },
									}}
								>
									{item.name}
								</Link>
							))}
						</Stack>
					</Grid>

					{/* KOLOM 4: Newsletter / Berlangganan */}
					<Grid size={{ xs: 12, md: 4 }}>
						<Typography
							variant="body1"
							sx={{ color: "#ffffff", fontWeight: 700, mb: 2.5 }}
						>
							Newsletter
						</Typography>
						<Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
							Get latest updates and offers. Subscribe to our newsletter and
							stay up to date with the latest news and offers.
						</Typography>

						{/* Input Email Form */}
						<Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
							<TextField
								fullWidth
								size="small"
								placeholder="Your Email"
								variant="outlined"
								sx={{
									backgroundColor: "rgba(255, 255, 255, 0.05)",
									borderRadius: 1.5,
									"& .MuiOutlinedInput-root": {
										color: "#ffffff",
										"& fieldset": { borderColor: "rgba(255, 255, 255, 0.1)" },
										"&:hover fieldset": {
											borderColor: "rgba(255, 255, 255, 0.2)",
										},
										"&.Mui-focused fieldset": { borderColor: "#1976d2" },
									},
								}}
							/>
							<Button
								variant="contained"
								endIcon={<SendIcon />}
								sx={{
									textTransform: "none",
									fontWeight: "bold",
									px: 3,
									py: { xs: 1, sm: 0 },
									borderRadius: 1.5,
									backgroundColor: "#1976d2",
									"&:hover": { backgroundColor: "#1565c0" },
								}}
							>
								Follow
							</Button>
						</Stack>
					</Grid>
				</Grid>

				{/* GARIS PEMBATAS */}
				<Divider sx={{ borderColor: "rgba(255, 255, 255, 0.05)", my: 3 }} />

				{/* BAGIAN COPYRIGHT & LEGAL */}
				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", sm: "row" },
						justifyContent: "space-between",
						alignItems: "center",
						gap: 2,
					}}
				>
					<Typography variant="caption" sx={{ fontSize: "0.85rem" }}>
						© {new Date().getFullYear()} Primera. Copyright All Rights Reserved.
					</Typography>
					<Stack direction="row" spacing={3}>
						{["Privacy Policy", "Terms & Conditions"].map((text) => (
							<Link
								key={text}
								href="#"
								underline="none"
								sx={{
									color: "#64748b",
									fontSize: "0.85rem",
									"&:hover": { color: "#ffffff" },
								}}
							>
								{text}
							</Link>
						))}
					</Stack>
				</Box>
			</Container>
		</Box>
	);
}

export default Footer;
