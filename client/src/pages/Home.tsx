import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Resume from "../components/Resume/Resume";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface LocationState {
	targetId?: string;
}

export default function Home({
	message,
	onOpenCV,
}: {
	message: string;
	onOpenCV: () => void;
}) {
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
				<Hero message={message} />
			</div>
			<div id="À propos">
				<About onOpenCV={onOpenCV} />
			</div>
			<div id="Projets">
				<Projects />
			</div>
			{/* <div id="Mon CV">
				<Resume />
			</div> */}
			<div id="Contact">
				<Contact />
			</div>
		</main>
	);
}
