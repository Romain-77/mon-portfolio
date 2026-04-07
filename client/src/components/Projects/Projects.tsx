import "./Projects.css";

const projectsData = [
	{
		id: 1,
		title: "Neon 808",
		description: "Label de musique électronique",
		tech: ["HTML", "CSS", "JavaScript"],
	},
	{
		id: 2,
		title: "MoveUp",
		description: "Application sportive inclusive",
		tech: ["JavaScript"],
	},
	{
		id: 3,
		title: "Druïdolib",
		description:
			"Application de mise en relation entre les druides et les clients",
		tech: ["React"],
	},
	{
		id: 4,
		title: "L'Écrin du Temps",
		description: "plateforme de vente de montres de luxe d'occasion",
		tech: ["React", "Node.js", "MySql"],
	},
];

export default function Projects() {
	return (
		<section className="projects-section">
			<div className="project-container">
				<h2 className="projects-title animate-in">Mes Projets</h2>
				<div className="projects-grid">
					{projectsData.map((project) => (
						<div className="project-card animate-in" key={project.id}>
							<div className="project-content">
								<h3>{project.title}</h3>
								<p>{project.description}</p>

								{/* IMPORTANT : On boucle sur project.tech 
                                   à l'intérieur de la carte du projet 
                                */}
								<div className="project-tech">
									{project.tech.map((t) => (
										<span key={t} className="tech-badge">
											{t}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
