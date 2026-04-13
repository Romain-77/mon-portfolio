import "./Hero.css";

interface HeroProps {
	message: string;
}

export default function Hero({ message }: HeroProps) {
	return (
		<section className="hero-section">
			<div className="hero-overlay" aria-hidden="true"></div>

			<div className="hero-container">
				<h1 className="hero-title animate-in">Romain DEBAS</h1>
				<h2 className="hero-subtitle animate-in delay-1">Développeur Web</h2>
				<p className="hero-description animate-in delay-2">
					Je crée des solutions numériques robustes et élégantes.
				</p>
			</div>
		</section>
	);
}
