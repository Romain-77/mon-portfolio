import { Link, useParams } from "react-router-dom";
import { projectsData } from "../../data/projects";
import "./ProjectDetails.css";
import { useTranslation } from "react-i18next";

export default function ProjectDetails() {
	const { id } = useParams();
	const { t } = useTranslation();
	const project = projectsData.find((p) => p.id === id);

	if (!project) {
		return (
			<div style={{ padding: "100px", textAlign: "center" }}>
				<h2>{t("projects.not_found")}</h2>
				<Link to="/">{t("projects.back_home")}</Link>
			</div>
		);
	}

	return (
		<div className="project-details-container">
			<Link to="/" state={{ targetId: "Projets" }} className="back-link">
				{t("projects.back")}
			</Link>
			<header className="project-header">
				<h1>{project.id}</h1>
				{project.video && (
					<div className="video-container">
						<video
							controls
							muted
							autoPlay
							preload="metadata"
							playsInline
							className="project-video"
						>
							<source src={project.video} type="video/mp4" />
							Votre navigateur ne supporte pas la lecture de vidéos.
						</video>
					</div>
				)}
				<p className="project-describe">
					{t(`projects.items.${project.id}.description`)}
				</p>
				<p className="stack">{t("projects.stack_title")}</p>
				<div className="tech-badges-container">
					{project.fullTechStack.map((tech) => (
						<span key={tech} className="tech-badge-item">
							{tech}
						</span>
					))}
				</div>
			</header>
		</div>
	);
}
