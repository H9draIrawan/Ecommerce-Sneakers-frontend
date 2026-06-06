import CategoryIcon from "@mui/icons-material/Category";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import {
	AppBar,
	Box,
	Container,
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
import { Link } from "react-router-dom";
function Navbar() {
	const navItems = [
		{
			text: "Home",
			icon: <HomeIcon sx={{ fontSize: "3vh" }} />,
			href: "/#home",
		},
		{
			text: "About",
			icon: <InfoIcon sx={{ fontSize: "3vh" }} />,
			href: "/#about",
		},
		{
			text: "Contact",
			icon: <ContactPageIcon sx={{ fontSize: "3vh" }} />,
			href: "/#contact",
		},
		{
			text: "Product",
			icon: <CategoryIcon sx={{ fontSize: "3vh" }} />,
			href: "/#product",
		},
	];
	const [open, setOpen] = useState(false);

	const toggleDrawer = () => {
		setOpen(!open);
	};

	const DrawerList = (
		<Box onClick={toggleDrawer} sx={{ textAlign: "center", width: 250 }}>
			<List>
				<img
					src="/src/assets/sneakers.png"
					alt="sneakers-logo"
					width={"64vh"}
					className="m-auto"
				/>

				{navItems.map((item) => (
					<ListItem key={item.text} disablePadding>
						<ListItemButton
							href={"/app" + item.href}
							sx={{
								width: "100%",
								textAlign: "left",
								justifyContent: "flex-start",
								px: 3,
								py: 1.5,
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
				position="static"
				elevation={2}
				sx={{ backgroundColor: "#1976d2" }}
			>
				<Container maxWidth={false}>
					<Toolbar disableGutters>
						{/* TAMPILAN MOBILE: Menu */}
						<Box
							sx={{ flexGrow: 4, gap: 2, display: { xs: "flex", md: "none" } }}
						>
							<IconButton
								onClick={toggleDrawer}
								size="large"
								aria-label="menu"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<img
								src="/src/assets/sneakers.png"
								alt="sneakers-logo"
								width={"20%"}
							/>
						</Box>
						{/* TAMPILAN DESKTOP: Logo */}
						<Link
							to="/app/"
							color="inherit"
							className="flex flex-row flex-1 gap-4 hidden md:flex"
						>
							<img
								src="/src/assets/sneakers.png"
								alt="sneakers-logo"
								width={"98vh"}
							/>
							<Typography
								variant="h6"
								sx={{
									fontSize: "3vh",
									fontWeight: "bold",
									letterSpacing: 2,
									alignSelf: "center",
								}}
							>
								Primera
							</Typography>
						</Link>

						{/* TAMPILAN DESKTOP: Navigation */}
						<Box
							sx={{
								flexGrow: 4,
								display: { xs: "none", md: "flex" },
								gap: 4,
								fontSize: "2.5vh",
								fontWeight: "bold",
								justifyContent: "center",
							}}
						>
							{navItems.map((item) => (
								<Link
									to={"/app" + item.href}
									key={item.text}
									className="flex flex-row gap-2 items-center hover:bg-white hover:text-blue-500 rounded-xl p-2 my-2"
								>
									{item.icon}
									{item.text}
								</Link>
							))}
						</Box>
						{/* TAMPILAN DESKTOP: Login */}
						<Link
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
									letterSpacing: 2,
									fontSize: "2.5vh",
									justifyContent: "center",
									alignSelf: "center",
									gap: 1,
								}}
							>
								Login
								<LoginIcon sx={{ fontSize: "4vh" }} />
							</Typography>
						</Link>
						{/* TAMPILAN MOBILE: Login */}
						<Link
							to="/login"
							color="inherit"
							className="flex-1 flex md:hidden py-2 my-2"
						>
							<LoginIcon sx={{ fontSize: "4vh", justifySelf: "flex-end" }} />
						</Link>
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
