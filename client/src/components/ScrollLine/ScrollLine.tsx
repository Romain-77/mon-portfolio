import { useEffect, useState } from "react";
import "./ScrollLine.css";

export default function ScrollLine() {
	const [scrollPercentage, setScrollPercentage] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const winScroll =
				document.body.scrollTop || document.documentElement.scrollTop;
			const height =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;
			const scrolled = (winScroll / height) * 100;
			setScrollPercentage(scrolled);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="scroll-line-container">
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 100 1000"
				preserveAspectRatio="none"
				aria-hidden="true"
			>
				<line
					x1="50"
					y1="0"
					x2="50"
					y2="1000"
					stroke="rgba(255,255,255,0.05)"
					strokeWidth="1"
				/>
				<line
					x1="50"
					y1="0"
					x2="50"
					y2={scrollPercentage * 10}
					stroke="var(--accent-color, #64ffda)"
					strokeWidth="1"
					strokeLinecap="round"
				/>
			</svg>
		</div>
	);
}
