import { useState } from "react";
import { useTranslation } from "react-i18next";
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
	const { t, i18n } = useTranslation();
	const navigate = useNavigate();
	const location = useLocation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	const handleNavClick = (id: string) => {
		setIsMenuOpen(false);
		if (id === "Mon CV" || id === "Resume") {
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

	const navLinks = [
		{ id: "Accueil", key: "navbar.home" },
		{ id: "À propos", key: "navbar.about" },
		{ id: "Mon CV", key: "navbar.resume" },
		{ id: "Projets", key: "navbar.projects" },
		{ id: "Contact", key: "navbar.contact" },
	];

	return (
		<nav className="navbar animate-in">
			<div className="nav-container">
				<Link to="/" className="nav-logo" onClick={() => setIsMenuOpen(false)}>
					Romain Debas
				</Link>

				<div className="nav-right">
					<ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
						{navLinks.map((link) => (
							<li key={link.id}>
								<button
									type="button"
									className="nav-item-btn"
									onClick={() => handleNavClick(link.id)}
								>
									{t(link.key)}
								</button>
							</li>
						))}
					</ul>
					<div className="nav-actions">
						<button
							type="button"
							className="lang-toggle-btn"
							onClick={() =>
								changeLanguage(i18n.language === "fr" ? "en" : "fr")
							}
							aria-label="changer la langue"
						>
							{i18n.language === "fr" ? (
								<img
									src="/uk-flag.png"
									alt="English"
									title="Switch to English"
								/>
							) : (
								<img
									src="/fr-flag.png"
									alt="Français"
									title="Passer en Français"
								/>
							)}
						</button>
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
