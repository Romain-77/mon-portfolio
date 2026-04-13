import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface LocationState {
	targetId?: string;
}

export default function Home({ message }: { message: string }) {
	const location = useLocation();

	useEffect(() => {
		// On "cast" l'état avec notre interface au lieu de 'any'
		const state = location.state as LocationState;

		if (state?.targetId) {
			const id = state.targetId;
			const element = document.getElementById(id);
			if (element) {
				setTimeout(() => {
					element.scrollIntoView({ behavior: "smooth" });
				}, 100);
			}
			// Optionnel : on nettoie l'état pour éviter de scroller à chaque refresh
			window.history.replaceState({}, document.title);
		}
	}, [location]);

	return (
		<main>
			<div id="Accueil">
				<Hero message={message} />
			</div>
			<div id="À propos">
				<About />
			</div>
			<div id="Projets">
				<Projects />
			</div>
			<div id="Contact">
				<Contact />
			</div>
		</main>
	);
}
