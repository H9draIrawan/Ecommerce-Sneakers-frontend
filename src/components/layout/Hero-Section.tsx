import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

function HeroSection() {
	return (
		<Box
			id="home"
			component="section"
			sx={{
				backgroundColor: "#f8fafc",
				minHeight: "80vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				pt: { xs: 6, sm: 18, md: 24 },
				px: { xs: 2, sm: 2, md: 4 },
			}}
		>
			<Container maxWidth={false}>
				<Grid container spacing={4}>
					<Grid size={{ xs: 12, md: 6 }}>
						<Stack spacing={3}>
							{/* Judul */}
							<Typography
								variant="h2"
								component="h1"
								sx={{
									fontWeight: 800,
									fontSize: {
										xs: "5vh",
										md: "5vw",
									},
									lineHeight: 1.2,
									color: "#1e293b",
								}}
							>
								Primera <p style={{ color: "#1976d2" }}>Sneakers Store</p>
							</Typography>

							{/* Deskripsi */}
							<Typography
								variant="h6"
								sx={{
									color: "#64748b",
									fontWeight: 400,
									fontSize: { xs: "1.5vh", md: "2vw" },
									lineHeight: 1.6,
								}}
							>
								Primera Sneakers Store is a place where you can find the best
								sneakers. We have a wide selection of sneakers from all over the
								world. You can find the sneakers you want here.
							</Typography>

							{/* Tombol Aksi (CTA) */}
							<Stack direction={"row"} spacing={2} sx={{ pt: 2 }}>
								<Button
									variant="contained"
									size="large"
									sx={{
										gap: 2,
										fontSize: {
											xs: "2vh",
											md: "1.5vw",
										},
										fontWeight: "bold",
										borderRadius: 2,
										boxShadow: "0 4px 14px 0 rgba(25, 118, 210, 0.4)",
									}}
								>
									<ShoppingCartIcon
										sx={{
											fontSize: {
												xs: "2vh",
												md: "1.5vw",
											},
										}}
									/>
									Buy Now
								</Button>
								<Button
									variant="outlined"
									size="large"
									sx={{
										fontSize: {
											xs: "2vh",
											md: "1.5vw",
										},
										fontWeight: "bold",
										textTransform: "none",
										borderRadius: 2,
										borderColor: "#cbd5e1",
										color: "#475569",
										"&:hover": {
											borderColor: "#94a3b8",
											backgroundColor: "#f1f5f9",
										},
									}}
								>
									Learn More
								</Button>
							</Stack>
						</Stack>
					</Grid>

					{/* KOLOM KANAN: Gambar / Ilustrasi */}
					<Grid
						size={{ xs: 12, md: 6 }}
						sx={{
							display: "flex",
							justifyContent: "center",
							order: { xs: -1, md: 1 },
						}}
					>
						<Box
							component="img"
							src="/src/assets/sneakers shop.webp"
							alt="Sneaker Shops"
							sx={{
								width: "100%",
								maxWidth: 1200,
								borderRadius: 4,
								boxShadow:
									"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
							}}
						/>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

export default HeroSection;
