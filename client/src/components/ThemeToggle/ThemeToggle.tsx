import "./ThemeToggle.css";

interface Props {
	isLightMode: boolean;
	toggle: () => void;
}

export default function ThemeToggle({ isLightMode, toggle }: Props) {
	return (
		<button
			type="button"
			className="lightmode-btn"
			onClick={toggle}
			aria-label="Changer le thème"
		>
			{isLightMode ? "🌙" : "☀️"}
		</button>
	);
}
