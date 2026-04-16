import { useEffect } from "react";

export const useScrollReveal = () => {
	useEffect(() => {
		const observerOptions = {
			threshold: 0.15,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("reveal-visible");
					// Une fois l'élément affiché, on peut arrêter de l'observer
					observer.unobserve(entry.target);
				}
			});
		}, observerOptions);

		const revealElements = document.querySelectorAll(".reveal");

		// Correction ici : ajout d'accolades pour ne rien retourner
		revealElements.forEach((el) => {
			observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);
};
