import { NavLink } from "react-router-dom";
import NavLinks from "./NavBar.json";

interface Props {
	showLinks?: boolean;
	logoImg?: string | null;
}

function NavBar({ showLinks = true, logoImg = null }: Props) {
	return (
		<nav
			className="navbar cat-bg-primary navbar-expand-lg"
			style={{ top: 0, height: "5rem" }}
			data-bs-theme="dark"
		>
			<div className="">
				{logoImg != null && (
					<NavLink className="navbar-brand" to="/">
						<img src={logoImg} width="50" height="50" />
					</NavLink>
				)}
				<div className="">
					{showLinks && (
						<ul className="flex gap-x-10 items-center justify-start">
							{NavLinks.Links.map((link, index) => (
								<li
									className="navLink nav-item"
									key={index}
									aria-label={`Link to ${link.name}`}
								>
									<NavLink
										tabIndex={0}
										className="nav-link text-blue-300"
										to={link.route}
										aria-label={`Link to ${link.name}`}
									>
										{link.name}
									</NavLink>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</nav>
	);
}

{
	/* Code for dropdown links
						<li
							className="nav-item"
							onMouseEnter={(e) => {
								e.preventDefault();
								setDropdownOpen(true);
							}}
							onMouseLeave={(e) => {
								e.preventDefault();
								setDropdownOpen(false);
							}}
						>
							<a
								className="nav-link dropdown-toggle"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								dropdown
							</a>
							<div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
								<NavLink
									onClick={() => {
										setDropdownOpen(false);
									}}
									className="dropdown-item"
									to="/help"
								>
									help
								</NavLink>
							</div>
						</li>*/
}

export default NavBar;
