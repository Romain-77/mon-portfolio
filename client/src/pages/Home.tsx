import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface LocationState {
	targetId?: string;
}
interface HomeProps {
	onOpenCV: () => void;
	onOpenLegal: () => void;
}

export default function Home({ onOpenCV, onOpenLegal }: HomeProps) {
	const location = useLocation();

	useEffect(() => {
		const state = location.state as LocationState;

		if (state?.targetId) {
			const targetId = state.targetId;

			const timer = setTimeout(() => {
				const element = document.getElementById(targetId);
				if (element) {
					element.scrollIntoView({ behavior: "auto" });

					window.history.replaceState({}, document.title);
				}
			}, 50);

			return () => clearTimeout(timer);
		}
	}, [location]);

	return (
		<main>
			<div id="Accueil">
				<Hero />
			</div>
			<div id="À propos">
				<About onOpenCV={onOpenCV} />
			</div>
			<div id="Projets">
				<Projects />
			</div>
			<div id="Contact">
				<Contact />
			</div>
			<div id="Footer">
				<Footer onOpenLegal={onOpenLegal} />
			</div>
		</main>
	);
}
