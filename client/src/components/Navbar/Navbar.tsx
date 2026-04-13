import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {
	isLightMode: boolean;
	toggleTheme: () => void;
}

export default function Navbar({ isLightMode, toggleTheme }: NavbarProps) {
	const navigate = useNavigate();
	const location = useLocation();

	const handleNavClick = (id: string) => {
		if (location.pathname === "/") {
			const element = document.getElementById(id);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		} else {
			navigate("/", { state: { targetId: id } });
		}
	};

	return (
		<nav className="navbar animate-in">
			{/* Le logo devient un lien vers l'accueil */}
			<Link
				to="/"
				className="nav-logo"
				style={{ textDecoration: "none", color: "inherit" }}
			>
				Romain Debas
			</Link>

			<div className="nav-right">
				<ul className="nav-links">
					{["Accueil", "À propos", "Projets", "Contact"].map((id) => (
						<li
							key={id}
							onClick={() => handleNavClick(id)}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									handleNavClick(id);
								}
							}}
							style={{ cursor: "pointer" }}
						>
							{id}
						</li>
					))}
				</ul>
				<button
					type="button"
					className="theme-toggle-btn"
					onClick={toggleTheme}
				>
					{isLightMode ? "🌙" : "☀️"}
				</button>
			</div>
		</nav>
	);
}
