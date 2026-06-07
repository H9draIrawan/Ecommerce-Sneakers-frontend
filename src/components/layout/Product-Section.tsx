import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Chip,
	Container,
	Grid,
	Rating,
	Stack,
	Typography,
} from "@mui/material";

// Data Mock Produk (Mudah disesuaikan dengan API Anda nanti)
const products = [
	{
		id: 1,
		title: "AirStride Runner X",
		category: "Sneakers",
		image: "/src/assets/product-1.webp",
		price: 1299000,
		rating: 4.8,
		reviews: 324,
		tag: "25% OFF",
		discountRate: 25,
	},
	{
		id: 2,
		title: "UrbanFlex Classic",
		category: "Sneakers",
		image: "/src/assets/product-2.webp",
		price: 899000,
		rating: 4.5,
		reviews: 187,
		tag: null,
		discountRate: 0,
	},
	{
		id: 3,
		title: "NeoSprint Lite",
		category: "Sneakers",
		image: "/src/assets/product-3.webp",
		price: 749000,
		rating: 4.3,
		reviews: 95,
		tag: "15% OFF",
		discountRate: 15,
	},
	{
		id: 4,
		title: "Velocity Pro Max",
		category: "Sneakers",
		image: "/src/assets/product-4.webp",
		price: 1599000,
		rating: 4.9,
		reviews: 412,
		tag: "Best Seller",
		discountRate: 0,
	},
	{
		id: 5,
		title: "StreetFlow Retro",
		category: "Sneakers",
		image: "/src/assets/product-5.webp",
		price: 1099000,
		rating: 4.6,
		reviews: 221,
		tag: "20% OFF",
		discountRate: 20,
	},
	{
		id: 6,
		title: "CloudStep Everyday",
		category: "Sneakers",
		image: "/src/assets/product-6.webp",
		price: 679000,
		rating: 4.2,
		reviews: 73,
		tag: null,
		discountRate: 0,
	},
	{
		id: 7,
		title: "Titan Boost Runner",
		category: "Sneakers",
		image: "/src/assets/product-7.webp",
		price: 1899000,
		rating: 4.8,
		reviews: 356,
		tag: "Trending",
		discountRate: 0,
	},
	{
		id: 8,
		title: "MotionX Knit",
		category: "Sneakers",
		image: "/src/assets/product-8.webp",
		price: 999000,
		rating: 4.4,
		reviews: 148,
		tag: "10% OFF",
		discountRate: 10,
	},
	{
		id: 9,
		title: "SkyRun Elite",
		category: "Sneakers",
		image: "/src/assets/product-9.webp",
		price: 2199000,
		rating: 5.0,
		reviews: 528,
		tag: "Premium",
		discountRate: 0,
	},
	{
		id: 10,
		title: "FlexCore Sport",
		category: "Sneakers",
		image: "/src/assets/product-10.webp",
		price: 849000,
		rating: 4.1,
		reviews: 67,
		tag: "30% OFF",
		discountRate: 30,
	},
	{
		id: 11,
		title: "RetroWave Low",
		category: "Sneakers",
		image: "/src/assets/product-11.webp",
		price: 1199000,
		rating: 4.7,
		reviews: 274,
		tag: "Popular",
		discountRate: 0,
	},
	{
		id: 12,
		title: "AeroDash Prime",
		category: "Sneakers",
		image: "/src/assets/product-12.webp",
		price: 1399000,
		rating: 4.8,
		reviews: 198,
		tag: "New Arrival",
		discountRate: 0,
	},
];

// Fungsi helper untuk memformat
const formatCurrency = (number: number) => {
	return new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
		maximumFractionDigits: 0,
	}).format(number);
};

function ProductSection() {
	return (
		<Box
			id="product"
			sx={{
				pt: { xs: 6, md: 24 },
				px: { xs: 2, md: 4 },
				backgroundColor: "#f8fafc",
			}}
		>
			<Container maxWidth={false}>
				{/* HEADER SECTION */}
				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", sm: "row" },
						justifyContent: "space-between",
						alignItems: { xs: "flex-start", sm: "center" },
						mb: { xs: 5, md: 6 },
						gap: 2,
					}}
				>
					<Box>
						<Typography
							variant="subtitle1"
							sx={{
								color: "#1976d2",
								textTransform: "uppercase",
								letterSpacing: 1.5,
								mb: 0.5,
								fontSize: { xs: "3vh", md: "3vw" },
							}}
						>
							Product Collection
						</Typography>
						<Typography
							variant="h4"
							component="h2"
							sx={{
								fontWeight: 800,
								color: "#1e293b",
								fontSize: { xs: "2.25vh", md: "2.25vw" },
							}}
						>
							The Best <span style={{ color: "#1976d2" }}>Products</span>
						</Typography>
					</Box>
				</Box>

				{/* GRID PRODUK */}
				<Grid container spacing={3}>
					{products.map((product) => (
						<Grid size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
							<Card
								elevation={2}
								sx={{
									height: "auto",
									display: "flex",
									flexDirection: "column",
									borderRadius: 4,
									border: "1px solid #e2e8f0",
									position: "relative",
									transition:
										"transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
									"&:hover": {
										transform: "translateY(-4px)",
										boxShadow: "0 12px 20px -5px rgba(0,0,0,0.08)",
									},
								}}
							>
								{/* Chip Diskon / Tag (Hanya muncul jika data ada) */}
								{product.tag && (
									<Chip
										label={product.tag}
										color={product.tag.includes("OFF") ? "error" : "secondary"}
										sx={{
											position: "absolute",
											top: 24,
											left: 24,
											zIndex: 2,
											fontWeight: "bold",
											fontSize: { xs: "2vh", md: "1.5vw" },
											py: 3,
										}}
									/>
								)}

								{/* Foto Produk */}
								<CardMedia
									component="img"
									height="auto"
									src={product.image}
									sx={{
										backgroundColor: "#f1f5f9",
										p: 2,
									}}
								/>

								{/* Konten Teks Produk */}
								<CardContent sx={{ p: 2.5, flexGrow: 1, pb: 1 }}>
									<Typography
										variant="body1"
										component="h3"
										sx={{
											fontWeight: 700,
											color: "#1e293b",
											mt: 0.5,
											mb: 1,
											fontSize: { xs: "2vh", md: "1.5vw" },
										}}
									>
										{product.title}
									</Typography>

									{/* Rating Bintang */}
									<Stack direction="row" spacing={0.5} sx={{ mb: 2 }}>
										<Rating
											value={product.rating}
											readOnly
											precision={0.1}
											size="large"
										/>
										<Typography
											variant="caption"
											sx={{
												color: "#64748b",
												fontWeight: 600,
												fontSize: { xs: "1.5vh", md: "0.75vw" },
											}}
										>
											({product.reviews})
										</Typography>
									</Stack>

									{/* Harga */}
									<Stack direction="row" spacing={1}>
										<Typography
											variant="h5"
											component="span"
											sx={{ fontWeight: 800, color: "#1976d2" }}
										>
											{formatCurrency(
												product.price -
													(product.price * product.discountRate) / 100,
											)}
										</Typography>
										{product.discountRate > 0 && (
											<Typography
												variant="body1"
												component="span"
												sx={{
													color: "#94a3b8",
													textDecoration: "line-through",
												}}
											>
												{formatCurrency(product.price)}
											</Typography>
										)}
									</Stack>
								</CardContent>

								{/* Tombol Aksi bawah Kartu */}
								<CardActions
									sx={{
										p: 2,
										pt: 0,
										display: "flex",
										justifyContent: "flex-end",
									}}
								>
									<Button
										variant="contained"
										sx={{
											px: 2,
											my: 2,
											textTransform: "none",
											fontWeight: "bold",
											borderRadius: 2,
											justifyContent: "flex-end",
											backgroundColor: "#1e293b",
											fontSize: { xs: "1.5vh", md: "1vw" },
											"&:hover": { backgroundColor: "#0f172a" },
										}}
									>
										<ShoppingCartIcon sx={{ mr: 1 }} />
										Buy +
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
}

export default ProductSection;
