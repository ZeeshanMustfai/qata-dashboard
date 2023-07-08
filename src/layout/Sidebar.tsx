import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { sLogout, userIcon } from "../assets/icons/indext";
import styles from "../styles/components/layout.module.scss";
import { Avatar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import NavItem from "./NavItem";
import { Menu } from "@mui/icons-material";
const drawerWidth = 240;

export const SidebarFooter = () => {
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem("isAuth");
		navigate({ pathname: "/login" });
	};
	return (
		<div className={styles.sidebarFooterWrapper}>
			<div className={styles.footer}>
				<Avatar
					src={userIcon}
					alt="user"
					sx={{ mr: 1, width: 48, height: 48 }}
				/>
				<div>
					<Typography variant="body1">John Doe</Typography>
					<Typography variant="body2">qata-polt</Typography>
				</div>
			</div>
			<div className={styles.footerLogout}>
				<img
					src={sLogout}
					alt="logout"
					className="pointer"
					onClick={handleLogout}
				/>
			</div>
		</div>
	);
};
export default function Sidebar(props: any) {
	const { window } = props;
	const navigate = useNavigate();
	const location = useLocation();
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [activeTab, setActiveTab] = React.useState("");

	React.useEffect(() => {
		highlightActiveTab();
	}, [location.pathname]);

	const highlightActiveTab = () => {
		let pathname = location.pathname.split("/");
		let activeTab = pathname[1];

		if (activeTab === "") {
			setActiveTab("dashboard");
		} else {
			setActiveTab(activeTab);
		}
	};

	const handleTab = (e: React.MouseEvent<HTMLElement>, menu: string) => {
		e.preventDefault();
		navigate(`/${menu}`);
		handleDrawerToggle();
	};

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const container =
		window !== undefined ? () => window().document.body : undefined;
	return (
		<>
			<Toolbar
				sx={{
					display: { xs: "block", sm: "none" },
				}}
				style={{ background: "#233F35" }}
			>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={handleDrawerToggle}
					sx={{ mr: 2, color: "primary", display: { xs: "block", sm: "none" } }}
				>
					<Menu style={{ width: 32, height: 32 }} />
				</IconButton>
			</Toolbar>
			<Drawer
				container={container}
				variant="temporary"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true,
				}}
				sx={{
					display: { xs: "block", sm: "none" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: drawerWidth,
						background: "#233F35",
						borderRadius: "24px",
						color: "#fff",
						zIndex: "1000",
					},
				}}
			>
				<NavItem activeTab={activeTab} handleTab={handleTab} />
			</Drawer>
			<Drawer
				sx={{
					display: { xs: "none", sm: "block" },
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
						background: "#233F35",
						borderRadius: "24px",
						color: "#fff",
						zIndex: "1000",
					},
				}}
				variant="permanent"
				anchor="left"
			>
				<NavItem activeTab={activeTab} handleTab={handleTab} />
			</Drawer>
		</>
	);
}
