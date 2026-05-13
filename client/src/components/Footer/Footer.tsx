import { useTranslation } from "react-i18next";
import "./Footer.css";

interface FooterProps {
	onOpenLegal: () => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
	const { t } = useTranslation();
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="footer-container">
				<p>
					© {currentYear} Romain Debas. {t("footer.rights")}
				</p>
				<button
					type="button"
					className="legal-btn"
					onClick={onOpenLegal}
					aria-label={t("footer.aria_legal")}
				>
					{t("footer.legal_link")}
				</button>
			</div>
		</footer>
	);
}
