import { Link, useParams } from "react-router-dom";
import { projectsData } from "../../data/projects";
import "./ProjectDetails.css";

export default function ProjectDetails() {
	const { id } = useParams();
	const project = projectsData.find((p) => p.id === id);

	if (!project) {
		return (
			<div style={{ padding: "100px", textAlign: "center" }}>
				<h2>Projet non trouvé</h2>
				<Link to="/">Retour a l'accueil</Link>
			</div>
		);
	}

	return (
		<div className="project-details-container">
			<Link to="/" className="back-link">
				Retour
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
				<p className="project-describe">{project.description}</p>
				<p className="stack">Stack</p>
				<div className="tech-badges-container">
					{project.fullTechStack?.map((tech) => (
						<span key={tech} className="tech-badge-item">
							{tech}
						</span>
					))}
				</div>
			</header>
		</div>
	);
}
