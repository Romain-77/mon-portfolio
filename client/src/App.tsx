import { useEffect, useState } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndiactor";
import "./App.css";

function App() {
	const [message, setMessage] = useState("");
	const [isLightMode, setIsLightMode] = useState(() => {
		const savedTheme = localStorage.getItem("portfolio-theme");
		return savedTheme === "light";
	});

	useEffect(() => {
		fetch("http://localhost:3001/api/hello")
			.then((response) => response.json())
			.then((data) => setMessage(data.message))
			.catch((err) => console.error("Erreur API: ", err));
	}, []);

	useEffect(() => {
		const theme = isLightMode ? "light" : "dark";
		document.body.setAttribute("data-theme", theme);
		localStorage.setItem("portfolio-theme", theme);
	}, [isLightMode]);

	return (
		<>
			<Navbar
				isLightMode={isLightMode}
				toggleTheme={() => setIsLightMode(!isLightMode)}
			/>
			<main>
				<div id="Accueil">
					<Hero message={message} />
				</div>
				<div id="À propos">
					<About />
				</div>
				<div id="Projets">
					<Projects />
				</div>
				<div id="Contact">
					<Contact />
				</div>
			</main>
			<ScrollIndicator />
		</>
	);
}

export default App;
