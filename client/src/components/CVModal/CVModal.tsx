import { useEffect } from "react";
import "./CVModal.css";

interface CVModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
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
				className="modal-content"
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
				<div className="cv-viewer">
					<img
						src="/CV-DEBAS-Romain.jpg"
						alt="CV de Romain Debas"
						className="cv-image"
					/>
				</div>
				<div className="modal-footer">
					<a href="/CV-DEBAS-Romain.jpg" download className="cv-btn download">
						Télécharger
					</a>
				</div>
			</div>
		</button>
	);
}
