import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {
	isLightMode: boolean;
	toggleTheme: () => void;
	onOpenCV: () => void;
}

export default function Navbar({
	isLightMode,
	toggleTheme,
	onOpenCV,
}: NavbarProps) {
	const navigate = useNavigate();
	const location = useLocation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleNavClick = (id: string) => {
		setIsMenuOpen(false);
		if (id === "Mon CV") {
			onOpenCV();
			return;
		}
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
			<div className="nav-container">
				<Link to="/" className="nav-logo" onClick={() => setIsMenuOpen(false)}>
					Romain Debas
				</Link>

				<div className="nav-right">
					<ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
						{["Accueil", "À propos", "Mon CV", "Projets", "Contact"].map(
							(id) => (
								<li key={id}>
									<button
										type="button"
										className="nav-item-btn"
										onClick={() => handleNavClick(id)}
									>
										{id}
									</button>
								</li>
							),
						)}
					</ul>
					<div className="nav-actions">
						<button
							type="button"
							className="theme-toggle-btn"
							onClick={toggleTheme}
							aria-label="changer le thème"
						>
							{isLightMode ? (
								<img src="/ThemeIcons/moon.png" alt="Lune" />
							) : (
								<img src="/ThemeIcons/sun.png" alt="Soleil" />
							)}
						</button>
						<button
							type="button"
							className={`burger-menu ${isMenuOpen ? "open" : ""}`}
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							aria-label="menu"
						>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}
