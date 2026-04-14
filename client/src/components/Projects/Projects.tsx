import { Link } from "react-router-dom";
import { projectsData } from "../../data/projects";
import "./Projects.css";
export default function Projects() {
	return (
		<section className="projects-section">
			<div className="projects-container">
				<h2 className="projects-title animate-in">Mes Projets</h2>
				<div className="projects-grid">
					{projectsData.map((project) => (
						<Link
							to={`/projet/${project.id}`}
							className="project-card-link"
							key={project.id}
						>
							<div className="project-card animate-in">
								<div className="project-content">
									<h3>{project.id}</h3>
									<h4>{project.title}</h4>
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
										{project.tech.map((t) => (
											<span key={t} className="tech-badge">
												{t}
											</span>
										))}
									</div>
									<span className="view-more">En savoir plus →</span>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
