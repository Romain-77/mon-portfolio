import { useState } from "react";
import "./Contact.css";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	// État pour gérer le chargement et le feedback utilisateur
	const [isSending, setIsSending] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSending(true);

		try {
			const response = await fetch("http://localhost:5001/api/contact", {
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
				setFormData({ name: "", email: "", message: "" });
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
				<div className="contact-info">
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
						>
							GitHub
						</a>
						<a
							href="https://www.linkedin.com/in/romain-debas/"
							target="_blank"
							rel="noreferrer"
						>
							LinkedIn
						</a>
					</div>
				</div>

				<form className="contact-form" onSubmit={handleSubmit}>
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
					<button type="submit" className="btn submit-btn" disabled={isSending}>
						{isSending ? "Envoi en cours..." : "Envoyer le message"}
					</button>
				</form>
			</div>
		</section>
	);
}
