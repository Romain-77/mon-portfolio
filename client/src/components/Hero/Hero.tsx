import "./Hero.css";

export default function Hero() {
	return (
		<section className="hero-section">
			<div className="hero-bg-container">
				<img
					src="/Hero/hero-bg.jpg"
					alt="hero-background"
					className="hero-bg-image"
					aria-hidden="true"
				/>
				<div className="hero-vignette"></div>
			</div>

			<div className="hero-container">
				<h1 className="hero-title animate-in">Romain DEBAS</h1>
				<h2 className="hero-subtitle animate-in delay-1">Développeur Web</h2>
				<p className="hero-description animate-in delay-2">
					RIGUEUR • DESIGN • PERFORMANCE
				</p>
				<div className="social-links animate-in delay-3">
					<a
						href="https://github.com/Romain-77"
						target="_blank"
						rel="noreferrer"
						className="social-link"
					>
						<img
							src="/Socials/github.png"
							alt="Github"
							className="social-icon"
						/>
						<span>GitHub</span>
					</a>
					<a
						href="https://www.linkedin.com/in/romain-debas/"
						target="_blank"
						rel="noreferrer"
						className="social-link"
					>
						<img
							src="/Socials/linkedin.png"
							alt="Linkedin"
							className="social-icon"
						/>
						<span>LinkedIn</span>
					</a>
				</div>
			</div>
		</section>
	);
}
