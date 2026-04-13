export interface Project {
	id: string;
	title: string;
	description: string;
	screenshots: string[];
	tech: string[];
	link?: string;
}

export const projectsData: Project[] = [
	{
		id: "L'Écrin du Temps",
		title: "Plateforme de vente de montres de luxe d'occasion",
		description: `L'Écrin du Temps est une plateforme e-commerce dédiée aux montres de luxe d’occasion, conçue pour offrir une expérience utilisateur élégante et rassurante. Le projet met en avant des produits d’exception à travers une interface soignée, des fiches détaillées et un système de navigation fluide avec filtres avancés.
Une attention particulière a été portée à l’ergonomie, à la mise en valeur visuelle des montres et à la structuration du parcours utilisateur, de la découverte produit jusqu’à la gestion de compte. Ce projet illustre la capacité à concevoir une plateforme complète, alliant exigences techniques et design haut de gamme.`,
		screenshots: [],
		tech: ["React", "Node.js", "MySql"],
	},
	{
		id: "Druïdolib",
		title: "Application de mise en relation entre les druides et les clients",
		description: `Druïdolib est un projet réalisé en 48h lors d’un hackathon, basé sur un concept original : transposer une technologie moderne dans une autre époque. Inspirée de Doctolib, l’application imagine un service de prise de rendez‑vous au Moyen Âge, mettant en relation druides, sorcières, mages et chamans avec leurs clients.
L’application propose un système de profils, de réservation et d’interactions entre utilisateurs, le tout dans un univers immersif et décalé. Une fonctionnalité clé du projet est le changement de thème dynamique : en plus de modifier l’apparence visuelle, celui‑ci transforme entièrement le contenu de l’application, permettant de basculer entre un mode 'guérison' et un mode 'malédiction'.
Ce projet met en avant la créativité, la rapidité d’exécution et la capacité à concevoir une expérience utilisateur complète dans un temps limité.`,
		screenshots: [],
		tech: ["React"],
	},
	{
		id: "MoveUp",
		title: "Application sportive inclusive",
		description: `MoveUp est une application sportive pensée pour être accessible à tous, quels que soient le niveau, les capacités ou les objectifs. Le projet propose une expérience centrée sur l’utilisateur, avec des parcours personnalisés, un suivi des performances et des fonctionnalités favorisant la motivation.
Une attention particulière a été portée à l’accessibilité et à la clarté de l’interface, afin de rendre la pratique sportive plus inclusive et engageante. Ce projet met en lumière la capacité à concevoir une application complète en un temps limité, en alliant réflexion produit, expérience utilisateur et cohérence visuelle.`,
		screenshots: [],
		tech: ["JavaScript"],
	},
	{
		id: "Neon 808",
		title: "Label de musique électronique",
		description: `Neon 808 est un site vitrine dédié à un label de musique électronique, conçu pour refléter une identité visuelle forte inspirée des univers nocturnes et digitaux. Le projet met l’accent sur l’ambiance graphique, les animations et l’immersion, afin de valoriser l’image du label et de ses artistes.
Pensé comme une vitrine moderne, le site présente les artistes, les projets et l’univers du label à travers une navigation fluide et dynamique. Réalisé en 2 semaines, ce projet illustre une capacité à produire rapidement une interface impactante, avec un travail poussé sur la direction artistique.`,
		screenshots: [],
		tech: ["HTML", "CSS", "JavaScript"],
	},
];
