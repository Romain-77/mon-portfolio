import { Link } from "react-router-dom";
import { projectsData } from "../../data/projects";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Projects.css";
import { useTranslation } from "react-i18next";

export default function Projects() {
	const { t } = useTranslation();
	useScrollReveal();

	return (
		<section className="projects-section">
			<div className="projects-container">
				<h2 className="projects-title reveal reveal-top">
					{t("projects.title")}
				</h2>
				<div className="projects-grid">
					{projectsData.map((project, index) => (
						<Link
							to={`/projet/${project.id}`}
							className={`project-card-link reveal ${
								index % 2 === 0 ? "reveal-left" : "reveal-right"
							}`}
							key={project.id}
						>
							<div className="project-card">
								<div className="card-bg-container">
									<img
										src="/Hero/hero-bg.jpg"
										alt="background-image"
										className="card-bg-image"
										aria-hidden="true"
									/>
								</div>

								<div className="project-content">
									<h3>{project.id}</h3>
									<h4>{t(`projects.items.${project.id}.title`)}</h4>
									<div className="project-image-container">
										{project.picture ? (
											<img
												src={project.picture}
												alt={project.id}
												className="project-card-image"
											/>
										) : (
											<div className="project-image-placeholder">
												{project.id}
											</div>
										)}
									</div>
									<div className="project-tech">
										<h5>Stacks</h5>
										{project.tech.slice(0, 4).map((t) => (
											<span key={t} className="tech-badge">
												{t}
											</span>
										))}
									</div>
									<span className="view-more">{t("projects.view_more")}</span>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
