export interface Project {
	id: string;
	title: string;
	description: string;
	tech: string[];
	fullTechStack: string[];
	picture: string;
	video: string;
	link?: string;
}

export const projectsData: Project[] = [
	{
		id: "EOS",
		title: "Journal de bord personnel et gestion du bien-être",
		description: `EOS est une application dédiée au bien-être et à l’introspection quotidienne. Elle permet de suivre ses humeurs, consigner ses pensées et évoluer dans une interface pensée pour être apaisante et intuitive.
Ce projet met l’accent sur l’expérience utilisateur, la clarté des interactions et une utilisation simple et agréable au quotidien.`,
		tech: ["React", "Node.js", "Express", "MySQL", "JWT", "Chart.js"],
		fullTechStack: [],
		picture: "/EOS/EOS screen.png",
		video:
			"https://res.cloudinary.com/dmj5xlmz3/video/upload/q_auto/f_auto/v1777882848/EOS-live_cvgysq.mov",
	},
	{
		id: "L'Écrin du Temps",
		title: "Plateforme de vente de montres de luxe d'occasion",
		description: `L’Écrin du Temps est une plateforme e-commerce spécialisée dans les montres de luxe d’occasion. Le projet propose une expérience élégante et fluide, avec une navigation optimisée, des filtres avancés et une mise en valeur soignée des produits.
Réalisé en 2 mois, ce projet illustre la création d’une plateforme complète alliant exigence technique et design haut de gamme.`,
		tech: ["React", "Node.js", "Express", "MySQL", "JWT", "Chart.js"],
		fullTechStack: [
			"React",
			"Node.js",
			"Express",
			"MySQL",
			"TypeScript",
			"Biome",
			"Vite",
			"JSON Web Token",
			"Bcrypt",
			"CORS",
			"Chart.js",
			"Nodemailer",
			"Multer",
		],
		picture: "/EDT/EDT screen.png",
		video:
			"https://res.cloudinary.com/dmj5xlmz3/video/upload/v1776169352/EDT-live_tewwrn.mp4",
	},
	{
		id: "Druïdolib",
		title: "Application de druides et particuliers",
		description: `Druïdolib est un projet réalisé en 48h lors d’un hackathon, imaginant une version médiévale de Doctolib. L’application permet de réserver des rendez-vous avec druides, mages ou sorcières dans un univers immersif et décalé.
Le projet se distingue par son système de thème dynamique, modifiant à la fois l’apparence et le contenu de l’application.`,
		tech: ["React", "TypeScript", "Vite"],
		fullTechStack: [
			"React",
			"React Router",
			"React-i18next",
			"Express",
			"TypeScript",
			"Biome",
			"Vite",
		],
		picture: "/Druidolib/Druidolib screen.png",
		video:
			"https://res.cloudinary.com/dmj5xlmz3/video/upload/v1776171523/Drui%CC%88dolib-live_iqeyyy.mp4",
	},
	{
		id: "MoveUp",
		title: "Application sportive inclusive",
		description: `MoveUp est une application sportive accessible à tous, pensée pour accompagner chaque utilisateur selon son niveau et ses objectifs. Elle propose des parcours personnalisés, un suivi des performances et une interface claire et inclusive.
Ce projet met en avant une approche centrée utilisateur, mêlant accessibilité, expérience fluide et cohérence visuelle.`,
		tech: [
			"React",
			"Node.js",
			"Express",
			"FullCalendar",
			"Google OAuth",
			"Nodemailer",
		],
		fullTechStack: [
			"React",
			"Node.js",
			"Express 5",
			"Google Auth Library",
			"JSON Web Token",
			"Nodemailer",
			"Bcrypt",
			"Multer",
			"Moment.js",
			"Biome",
			"CORS",
		],
		picture: "/MoveUp/MoveUp screen.png",
		video: "",
	},
	{
		id: "Neon 808",
		title: "Label de musique électronique",
		description: `Neon 808 est un site vitrine conçu pour un label de musique électronique. Inspiré des univers nocturnes et digitaux, le projet mise sur une direction artistique forte, des animations immersives et une navigation dynamique.
Réalisé en 2 semaines, il démontre une capacité à concevoir rapidement une interface moderne et impactante.`,
		tech: ["HTML5", "CSS3", "JavaScript ES6"],
		fullTechStack: [
			"HTML5 Semantic",
			"CSS3 Custom Properties",
			"JavaScript",
			"DOM Manipulation",
			"Responsive Design",
		],
		picture: "/Neon808/Neon808 screen.png",
		video:
			"https://res.cloudinary.com/dmj5xlmz3/video/upload/v1776172359/Neon808-live_wc6imz.mp4",
	},
];
