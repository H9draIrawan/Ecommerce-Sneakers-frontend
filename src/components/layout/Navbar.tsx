import CategoryIcon from "@mui/icons-material/Category";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import {
	AppBar,
	Box,
	Button,
	Container,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
	const navItems = [
		{
			text: "Home",
			icon: (
				<HomeIcon
					sx={{
						fontSize: {
							xs: "4vh",
							md: "2.5vw",
						},
					}}
				/>
			),
			href: "#home",
		},
		{
			text: "Product",
			icon: (
				<CategoryIcon
					sx={{
						fontSize: {
							xs: "4vh",
							md: "2.5vw",
						},
					}}
				/>
			),
			href: "#product",
		},
		{
			text: "Contact",
			icon: (
				<ContactPageIcon
					sx={{
						fontSize: {
							xs: "4vh",
							md: "2.5vw",
						},
					}}
				/>
			),
			href: "#contact",
		},
	];
	const [open, setOpen] = useState(false);

	const toggleDrawer = () => {
		setOpen(!open);
	};

	const DrawerList = (
		<Box onClick={toggleDrawer} sx={{ textAlign: "center", width: 200 }}>
			<List>
				<Box
					component="img"
					src="/src/assets/sneakers.png"
					alt="sneakers-logo"
					className="m-auto"
					style={{ width: "20vw" }}
				/>
				<Divider />

				{navItems.map((item) => (
					<ListItem key={item.text} disablePadding>
						<ListItemButton
							href={"/app" + item.href}
							sx={{
								width: "100%",
								textAlign: "left",
								justifyContent: "flex-start",
							}}
						>
							<ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
							<ListItemText primary={item.text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);
	return (
		<Box sx={{ flexGrow: 1 }} component="nav">
			<AppBar
				position="fixed"
				elevation={2}
				sx={{ backgroundColor: "#1976d2" }}
			>
				<Container maxWidth={false}>
					<Toolbar disableGutters>
						{/* TAMPILAN MOBILE: Menu */}
						<Box
							sx={{
								flexGrow: 4,
								gap: 2,
								display: { xs: "flex", sm: "flex", md: "none" },
							}}
						>
							<IconButton
								onClick={toggleDrawer}
								size="large"
								aria-label="menu"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								color="inherit"
							>
								<MenuIcon
									sx={{
										fontSize: "5vh",
									}}
								/>
							</IconButton>
							<Box
								component="img"
								src="/src/assets/sneakers.png"
								alt="sneakers-logo"
								width={"20%"}
							/>
						</Box>
						{/* TAMPILAN DESKTOP: Logo */}
						<NavLink
							to="/app/"
							color="inherit"
							className="flex flex-row flex-1 gap-4 hidden md:flex"
						>
							<Box
								component="img"
								src="/src/assets/sneakers.png"
								alt="sneakers-logo"
								style={{
									width: "5vw",
								}}
							/>
							<Typography
								variant="h6"
								sx={{
									fontSize: "3vw",
									fontWeight: "bold",
									letterSpacing: 2,
									alignSelf: "center",
								}}
							>
								Primera
							</Typography>
						</NavLink>

						{/* TAMPILAN DESKTOP: Navigation */}
						<Box
							sx={{
								flexGrow: 4,
								display: { xs: "none", md: "flex" },
								gap: 4,
								fontSize: "2vw",
								fontWeight: "bold",
								justifyContent: "center",
								py: 2,
							}}
						>
							{navItems.map((item) => (
								<Button
									href={"/app" + item.href}
									key={item.text}
									sx={{
										color: "#fff",
										textTransform: "none",
										fontSize: "2vw",
										letterSpacing: 1.5,
										fontWeight: "bold",
										gap: 1,
										justifyContent: "center",
										alignSelf: "center",
										":hover": {
											color: "#1976d2",
											backgroundColor: "#fff",
											borderRadius: 4,
											boxShadow: "0 4px 14px 0 rgba(25, 118, 210, 0.4)",
										},
									}}
								>
									{item.icon}
									{item.text}
								</Button>
							))}
						</Box>
						{/* TAMPILAN DESKTOP: Login */}
						<NavLink
							to="/login"
							color="inherit"
							className="flex-1 hover:bg-white hover:text-blue-500 rounded-xl py-2 my-2"
						>
							<Typography
								variant="h6"
								noWrap
								component="div"
								sx={{
									display: { xs: "none", md: "flex" },
									fontWeight: "bold",
									fontSize: "2vw",
									justifyContent: "center",
									alignSelf: "center",
									gap: 1,
								}}
							>
								Login
								<LoginIcon sx={{ fontSize: "3vw", alignSelf: "center" }} />
							</Typography>
						</NavLink>
						{/* TAMPILAN MOBILE: Login */}
						<NavLink
							to="/login"
							color="inherit"
							className="flex-1 flex md:hidden py-2 my-2"
						>
							<LoginIcon sx={{ fontSize: "4vh", justifySelf: "flex-end" }} />
						</NavLink>
					</Toolbar>
				</Container>
			</AppBar>
			<Drawer
				variant="temporary"
				open={open}
				onClose={toggleDrawer}
				sx={{
					display: { xs: "block", md: "none" },
				}}
			>
				{DrawerList}
			</Drawer>
		</Box>
	);
}

export default Navbar;
