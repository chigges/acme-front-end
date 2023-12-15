import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function Layout() {
	return (
		<div className={""}>
			<div className="text-blue-500">
				<NavBar showLinks />
			</div>
			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default Layout;
