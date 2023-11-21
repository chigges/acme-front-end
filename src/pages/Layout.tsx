import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function Layout() {
	return (
		<div>
			{/*NavLinks.Links.map((link) => (
				<NavLink to={link.route}>
					{link.name}
				</NavLink>
			))*/}
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
