import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndiactor";

import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import "./App.css";

function App() {
	const [message] = useState("");
	const [isLightMode, setIsLightMode] = useState(() => {
		const savedTheme = localStorage.getItem("portfolio-theme");
		return savedTheme === "light";
	});

	useEffect(() => {
		const theme = isLightMode ? "light" : "dark";
		document.body.setAttribute("data-theme", theme);
		localStorage.setItem("portfolio-theme", theme);
	}, [isLightMode]);

	return (
		<Router>
			<Navbar
				isLightMode={isLightMode}
				toggleTheme={() => setIsLightMode(!isLightMode)}
			/>

			<Routes>
				{/* Route pour la page principale */}
				<Route path="/" element={<Home message={message} />} />

				{/* Route dynamique pour chaque projet */}
				<Route path="/projet/:id" element={<ProjectDetails />} />
			</Routes>

			<ScrollIndicator />
		</Router>
	);
}

export default App;
