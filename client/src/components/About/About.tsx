import { useTranslation, Trans } from "react-i18next"; // Ajout de Trans
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./About.css";

interface AboutProps {
	onOpenCV: () => void;
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
	return (
		<div className="skill-card">
			<div className="card-bg-container">
				<img
					src="/Hero/hero-bg.jpg"
					alt="background"
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
export default function About({ onOpenCV }: AboutProps) {
	const { t } = useTranslation();
	useScrollReveal();

	const localizedSkills = [
		{
			title: t("about.skills.frontend"),
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
			title: t("about.skills.backend"),
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
			title: t("about.skills.tools"),
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
			title: t("about.skills.management"),
			skills: ["Figma", "Trello", "Excalidraw", "Agile SCRUM", "UX Design"],
		},
	];

	return (
		<section className="about-section">
			<h2 className="reveal">{t("about.title")}</h2>
			<div className="about-container">
				<div className="about-text reveal reveal-left">
					<p>
						<Trans
							i18nKey="about.p1"
							components={[
								<strong key="0">manager dans le luxe</strong>,
								<strong key="1">tourisme</strong>,
								<strong key="2">Wild Code School</strong>,
							]}
						></Trans>
					</p>
					<p>
						<Trans
							i18nKey="about.p2"
							components={[
								<strong key="0">parcours hybride</strong>,
								<strong key="1">
									agilité, gestion du stress et résolution de problèmes
									complexes
								</strong>,
							]}
						></Trans>
					</p>
					<p>
						<Trans
							i18nKey="about.p3"
							components={[<strong key="0">rigueur opérationnelle</strong>]}
						></Trans>
					</p>
					<div className="about-actions">
						<button type="button" className="about-cv-btn" onClick={onOpenCV}>
							{t("about.btn_cv")}
						</button>
					</div>
				</div>
				<div className="skills-grid reveal reveal-right">
					{localizedSkills.map((item) => (
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
