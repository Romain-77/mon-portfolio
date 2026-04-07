import "./Navbar.css";

interface NavbarProps {
	isLightMode: boolean;
	toggleTheme: () => void;
}

export default function Navbar({ isLightMode, toggleTheme }: NavbarProps) {
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
		if (e.key === "Enter" || e.key === "") {
			scrollToSection(id);
		}
	};

	return (
		<nav className="navbar animate-in">
			<div className="nav-logo">
				RD<span>.</span>
			</div>
			<div className="nav-right">
				<ul className="nav-links">
					{["Accueil", "À propos", "Projets", "Contact"].map((id) => (
						<li
							key={id}
							onClick={() => scrollToSection(id)}
							onKeyDown={(e) => handleKeyDown(e, id)}
							aria-label={`Aller à la section ${id}`}
						>
							{id.charAt(0).toUpperCase() + id.slice(1)}
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
