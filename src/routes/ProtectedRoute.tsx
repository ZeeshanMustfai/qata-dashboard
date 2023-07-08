import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface TProtectRoute {
	isAuthenticated: string | null;
	children: ReactElement;
}
const ProtectedRoute = ({ isAuthenticated, children }: TProtectRoute) => {
	if (!isAuthenticated) {
		return <Navigate to="/login" />;
	}
	return children;
};

export default ProtectedRoute;
