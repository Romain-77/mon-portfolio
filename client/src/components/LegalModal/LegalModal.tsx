import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./LegalModal.css";

interface LegalModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function LegalModal({ isOpen, onClose }: LegalModalProps) {
	const { t } = useTranslation();
	const siteUrl = "https://romain-debas-portfolio.vercel.app";
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
			aria-label={t("legal.close")}
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
					aria-label={t("legal.close")}
				>
					&times;
				</button>
				<h2>{t("legal.title")}</h2>
				<h3>{t("legal.editor_title")}</h3>
				<p>
					{t("legal.editor_text", { url: siteUrl })}
					<br />
					Romain DEBAS, {t("legal.residence")}
					<br />
					Contact : debasromain@gmail.com
					<br />
					{t("about.skills.management") === "Design & Management"
						? "Publication Director"
						: "Directeur de la publication"}{" "}
					: Romain DEBAS
				</p>
				<h3>{t("legal.hosting_title")}</h3>
				<p>
					{t("legal.hosting_text")}
					<br />
					Website: https://vercel.com
				</p>
				<h3>{t("legal.ip_title")}</h3>
				<p>{t("legal.ip_text")}</p>
				<h3>{t("legal.rgpd_title")}</h3>
				<p>{t("legal.rgpd_text")}</p>
				<h3>{t("legal.cookies_title")}</h3>
				<p>{t("legal.cookies_text")}</p>
			</div>
		</button>
	);
}
