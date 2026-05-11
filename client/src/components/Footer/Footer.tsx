import "./Footer.css";

interface FooterProps {
	onOpenLegal: () => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="footer-container">
				<p>© {currentYear} Romain Debas. Tous droits réservés.</p>
				<button
					type="button"
					className="legal-btn"
					onClick={onOpenLegal}
					aria-label="Ouvrir les mentions légales"
				>
					Mentions légales
				</button>
			</div>
		</footer>
	);
}
