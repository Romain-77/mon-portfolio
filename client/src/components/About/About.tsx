import "./About.css";

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
	return (
		<div className="skill-card">
			<h3>{title}</h3>
			<ul>
				{skills.map((skill) => (
					<li key={skill}>{skill}</li>
				))}
			</ul>
		</div>
	);
}

export default function About() {
	return (
		<section className="about-section">
			<div className="about-container">
				<div className="about-text animate-in">
					<h2>À propos de moi</h2>
					<p>
						Passioné par le développement web, je me spécialise dans la création
						d'application modernes. Mon approche combine rigueur technique et
						designe épuré.
					</p>
					<p>
						Je suis constamment à la recherche de nouveaux défis et
						d'opportunités pour apprendre et grandir en tant que développeur.
					</p>
				</div>
				<div className="skills-grid animate-in delay-1">
					<SkillCard
						title="Frontend"
						skills={[
							"React",
							"TypeScript",
							"CSS Animations",
							"Responsive Design",
						]}
					/>
					<SkillCard
						title="Backend"
						skills={["Node.js", "Express", "MySQL", "REST APIs"]}
					/>
					<SkillCard title="Outils" skills={["Git", "GitHub", "Vite.js"]} />
				</div>
			</div>
		</section>
	);
}
