import "./Resume.css";

export default function Resume() {
	return (
		<section id="Mon CV" className="resume-section reveal">
			<h2 className="resume-title">Mon CV</h2>
			<div className="resume-card">
				<div className="card-bg-container">
					<img
						src="/Hero/hero-bg.jpg"
						alt="bg-image"
						className="card-bg-image"
					/>
				</div>

				<div className="resume-content">
					<div className="resume-actions">
						<a
							href="/CV-Romain-Debas.pdf"
							target="_blank"
							rel="noreferrer"
							className="cv-btn view"
						>
							Consulter
						</a>
						<a
							href="/CV-Romain-Debas.pdf"
							download="CV-Romain-Debas.pdf"
							className="cv-btn download"
						>
							Télécharger
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
