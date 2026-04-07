import { useEffect, useState } from "react";
import "./ScrollIndicator.css";

export default function ScrollIndicator() {
	const [isAtBottom, setIsAtBottom] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.innerHeight + window.pageYOffset;
			const pageHeight = document.documentElement.scrollHeight;

			if (scrollPosition >= pageHeight - 100) {
				setIsAtBottom(true);
			} else {
				setIsAtBottom(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleClick = () => {
		if (isAtBottom) {
			window.scrollTo({ top: 0, behavior: "smooth" });
		} else {
			window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
		}
	};

	return (
		<button
			type="button"
			className={`scroll-context-btn ${isAtBottom ? "is-bottom" : ""}`}
			onClick={handleClick}
			aria-label={isAtBottom ? "Remonter" : "Descendre"}
		>
			<span className="arrow-icon">↓</span>
		</button>
	);
}
