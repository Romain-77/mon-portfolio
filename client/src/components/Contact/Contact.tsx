import { useState } from "react";
import "./Contact.css";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Données envoyées :", formData);
		alert("Merci ! Votre message a bien été envoyé.");
	};

	return (
		<section className="contact-section">
			<div className="contact-container animate-in">
				<div className="contact-info">
					<h2>
						Me contacter<span>.</span>
					</h2>
					<p>
						Un projet en tête ou simplement envie de discuter ? N'hésitez pas à
						m'envoyer un message, je vous répondrai avec plaisir.
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
							placeholder="Votre nom"
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
							placeholder="Comment puis-je vous aider ?"
						></textarea>
					</div>
					<button type="submit" className="btn submit-btn">
						Envoyer le message
					</button>
				</form>
			</div>
		</section>
	);
}
