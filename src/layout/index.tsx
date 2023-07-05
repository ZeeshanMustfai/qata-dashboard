import React from "react";
import Sidebar from "./Sidebar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

interface TSidebar {
	children: React.ReactNode;
}

const Layout = ({ children }: TSidebar) => {
	return (
		<Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
			<CssBaseline />
			<Sidebar />
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					bgcolor: "background.default",
					p: 3,
					width: "100%",
				}}
			>
				{children}
			</Box>
		</Box>
	);
};

export default Layout;
