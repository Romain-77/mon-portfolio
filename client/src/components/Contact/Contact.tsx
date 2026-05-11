import { useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Contact.css";

export default function Contact() {
	useScrollReveal();
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
				alert("✅ Merci ! Votre message a bien été envoyé.");
				// On vide le formulaire après succès
				setFormData({ name: "", email: "", message: "", acceptTerms: false });
			} else {
				alert(`❌ Erreur : ${data.message || "Une erreur est survenue"}`);
			}
		} catch (error) {
			console.error("Erreur réseau :", error);
			alert("❌ Le serveur est injoignable. Vérifiez qu'il est bien lancé.");
		} finally {
			setIsSending(false);
		}
	};

	return (
		<section className="contact-section">
			<div className="contact-container animate-in">
				<div className="contact-info reveal reveal-left">
					<h2>Me contacter</h2>
					<p>
						Un projet en tête ou simplement envie d'en apprendre plus sur mon
						travail ? N'hésitez pas à m'envoyer un message, je vous répondrai
						avec plaisir.
					</p>
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
							<label htmlFor="name">Nom</label>
							<input
								type="text"
								id="name"
								required
								value={formData.name}
								onChange={(e) =>
									setFormData({ ...formData, name: e.target.value })
								}
								placeholder="Votre Nom"
								disabled={isSending}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								required
								value={formData.email}
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
								placeholder="votre@email.com"
								disabled={isSending}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="message">Message</label>
							<textarea
								id="message"
								rows={5}
								required
								value={formData.message}
								onChange={(e) =>
									setFormData({ ...formData, message: e.target.value })
								}
								placeholder="Votre message..."
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
							<label htmlFor="acceptTerms">
								En cochant cette case, j'acccepte que mes données soient
								utilisées pour me contacter.
							</label>
						</div>
						<button
							type="submit"
							className="btn submit-btn"
							disabled={isSending || !formData.acceptTerms}
						>
							{isSending ? "Envoi en cours..." : "Envoyer le message"}
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}
