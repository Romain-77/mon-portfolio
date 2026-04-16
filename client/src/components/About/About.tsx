import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./About.css";

const SkillsData = [
	{
		title: "Frontend Development",
		skills: [
			"React",
			"TypeScript",
			"Vite",
			"React Router",
			"React-i18next",
			"Chart.js",
			"Responsive Design",
		],
	},
	{
		title: "Backend & Sécurité",
		skills: [
			"Node.js",
			"Express 5",
			"MySQL",
			"JWT",
			"Bcrypt",
			"Google Auth",
			"Nodemailer",
			"Multer",
		],
	},
	{
		title: "Outils de Dev",
		skills: [
			"Biome",
			"Git / GitHub",
			"CORS",
			"Moment.js",
			"Postman",
			"DOM Manipulation",
		],
	},
	{
		title: "Design & Gestion",
		skills: ["Figma", "Trello", "Excalidraw", "Agile SCRUM", "UX Design"],
	},
];

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
	return (
		<div className="skill-card">
			<div className="card-bg-container">
				<img
					src="/Hero/hero-bg.jpg"
					alt="background-image"
					className="card-bg-image"
					aria-hidden="true"
				/>
			</div>
			<div className="skill-content">
				<h3>{title}</h3>
				<ul>
					{skills.map((skill) => (
						<li key={skill}>{skill}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default function About() {
	useScrollReveal();

	return (
		<section className="about-section">
			<div className="about-container">
				<div className="about-text reveal reveal-left">
					<h2>À propos de moi</h2>
					<p>
						Après une carrière de <strong>manager dans le luxe</strong> et une
						expérience enrichissante dans le <strong>tourisme</strong>, j'ai
						choisi de m'orienter vers un nouveau challenge en intégrant la{" "}
						<strong>Wild Code School</strong> pour un bootcamp intensif de 5
						mois.
					</p>
					<p>
						Ce <strong>parcours hybride</strong> est ma plus grande force : de
						mes années dans le luxe, j'ai gardé le sens du détail, la recherche
						de l'excellence et une compréhension fine des attentes clients. Mon
						expérience en management et dans le tourisme m'a doté de compétences
						transversales essentielles —{" "}
						<strong>
							agilité, gestion du stress et résolution de problèmes complexes
						</strong>{" "}
						— que j'applique désormais au développement web.
					</p>
					<p>
						Aujourd'hui, je compile cette{" "}
						<strong>rigueur opérationnelle</strong> avec mes compétences de
						développeur pour bâtir des solutions numériques qui ne sont pas
						seulement fonctionnelles, mais pensées pour l'expérience utilisateur
						et la performance métier.
					</p>
				</div>
				<div className="skills-grid reveal reveal-right">
					{SkillsData.map((item) => (
						<SkillCard
							key={item.title}
							title={item.title}
							skills={item.skills}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
