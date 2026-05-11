import { useEffect } from "react";
import "./LegalModal.css";

interface LegalModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function LegalModal({ isOpen, onClose }: LegalModalProps) {
	useEffect(() => {
		const handleEsc = (event: KeyboardEvent) => {
			if (event.key === "Escape") onClose();
		};
		window.addEventListener("keydown", handleEsc);
		return () => window.removeEventListener("keydown", handleEsc);
	}, [onClose]);

	if (!isOpen) return null;

	return (
		<button
			type="button"
			className="modal-overlay"
			onClick={onClose}
			aria-label="Fermer la modale"
		>
			<div
				className="modal-content legal-content"
				onClick={(e) => e.stopPropagation()}
				onKeyDown={(e) => e.stopPropagation()}
				role="dialog"
			>
				<button
					type="button"
					className="close-btn"
					onClick={onClose}
					aria-label="Fermer"
				>
					&times;
				</button>
				<h2>Mentions Légales</h2>
				<h3>Éditeur du site</h3>
				<p>
					Le site https://romain-debas-portfolio.vercel.app est édité par:
					<br />
					Romain DEBAS, résidant à Torcy (77200), France.
					<br />
					Contact : debasromain@gmail.com
					<br />
					Directeur de la publication : Romain DEBAS
				</p>
				<h3>Hébergement</h3>
				<p>
					Le site est hébergé par la société Vercel Inc., située au 340 S Lemon
					Ave #4133, Walnut, CA 91789, USA.
					<br />
					site web : https://vercel.com
				</p>
				<h3>Propriété intellectuelle</h3>
				<p>
					L'ensemble de ce site, y compris les textes, graphismes, logos et
					codes sources, relève de la législation française et internationale
					sur le droit d'auteur et la propriété intellectuelle. Toute
					reproduction est interdite sans accord préalable.
				</p>
				<h3>Protection des données personnelles (RGPD)</h3>
				<p>
					Les données collectées via le formulaire de contact (Nom, Email,
					Message) sont uniquement destinées à Romain DEBAS pour répondre aux
					demandes de contact. Elles ne sont en aucun cas cédées ou vendues a
					des tiers. Conformément à la loi "Informatique et Libertés", vous
					pouvez exercer votre droit d'accès et de suppression en écrivant à :
					debasromain@gmail.com.
				</p>
				<h3>Cookies</h3>
				<p>
					Ce site n'utilise aucun cookie de traçage publicitaire ou de
					profilage. Des outils d'analyse de performance respectueux de la vie
					privée (Vercel Analytics) peuvent être utilisés sans collecte de
					données personnelles.
				</p>
			</div>
		</button>
	);
}
