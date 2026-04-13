import { Link, useParams } from "react-router-dom";
import { projectsData } from "../data/projects";

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
		<div className="project-details-page" style={{ padding: "100px 20px " }}>
			<Link to="/" style={{ color: "var(--mint-green)" }}>
				Retour
			</Link>
			<h1>{project.title}</h1>
			<p>{project.description}</p>
			<p className="tech-badges">{project.tech}</p>

			<div className="screenshots-grid">
				{project.screenshots.map((src) => (
					<img
						key={src}
						src={src}
						alt={project.title}
						style={{ width: "100%", marginBottom: "20px" }}
					/>
				))}
			</div>
		</div>
	);
}
