import { useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useTranslation } from "react-i18next";
import "./Contact.css";

export default function Contact() {
	useScrollReveal();
	const { t } = useTranslation();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
		acceptTerms: false,
	});

	// État pour gérer le chargement et le feedback utilisateur
	const [isSending, setIsSending] = useState(false);

	const handleSubmit = async (e: React.BaseSyntheticEvent) => {
		e.preventDefault();
		setIsSending(true);

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (response.ok) {
				alert(t("contact.alert_success"));
				// On vide le formulaire après succès
				setFormData({ name: "", email: "", message: "", acceptTerms: false });
			} else {
				alert(
					`${t("contact.alert_error")}${data.message || t("contact.alert_error_default")}`,
				);
			}
		} catch (error) {
			console.error("Erreur réseau :", error);
			alert(t("contact.alert_server_error"));
		} finally {
			setIsSending(false);
		}
	};

	return (
		<section className="contact-section">
			<div className="contact-container animate-in">
				<div className="contact-info reveal reveal-left">
					<h2>{t("contact.title")}</h2>
					<p>{t("contact.description")}</p>
					<div className="social-links">
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
							<span className="social-text">GitHub</span>
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
							<span className="social-text">LinkedIn</span>
						</a>
					</div>
				</div>

				<form
					className="contact-form reveal reveal-right"
					onSubmit={handleSubmit}
				>
					<div className="card-bg-container">
						<img
							src="/Hero/hero-bg.jpg"
							alt="backgroung-image"
							className="card-bg-image"
							aria-hidden="true"
						/>
					</div>
					<div className="form-content">
						<div className="form-group">
							<label htmlFor="name">{t("contact.label_name")}</label>
							<input
								type="text"
								id="name"
								required
								value={formData.name}
								onChange={(e) =>
									setFormData({ ...formData, name: e.target.value })
								}
								placeholder={t("contact.placeholder_name")}
								disabled={isSending}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="email">{t("contact.label_email")}</label>
							<input
								type="email"
								id="email"
								required
								value={formData.email}
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
								placeholder={t("contact.placeholder_email")}
								disabled={isSending}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="message">{t("contact.label_message")}</label>
							<textarea
								id="message"
								rows={5}
								required
								value={formData.message}
								onChange={(e) =>
									setFormData({ ...formData, message: e.target.value })
								}
								placeholder={t("contact.placeholder_message")}
								disabled={isSending}
							></textarea>
						</div>
						<div className="form-group checkbox-group">
							<input
								type="checkbox"
								id="acceptTerms"
								required
								checked={formData.acceptTerms}
								onChange={(e) =>
									setFormData({ ...formData, acceptTerms: e.target.checked })
								}
							/>
							<label htmlFor="acceptTerms">{t("contact.checkbox_terms")}</label>
						</div>
						<button
							type="submit"
							className="btn submit-btn"
							disabled={isSending || !formData.acceptTerms}
						>
							{isSending ? t("contact.btn_sending") : t("contact.btn_send")}
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}
