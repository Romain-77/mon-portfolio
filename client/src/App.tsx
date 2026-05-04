import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CVModal from "./components/CVModal/CVModal";
import Navbar from "./components/Navbar/Navbar";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndiactor";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	const [isCVOpen, setIsCVOpen] = useState(false);
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
			<ScrollToTop />
			<Navbar
				isLightMode={isLightMode}
				toggleTheme={() => setIsLightMode(!isLightMode)}
				onOpenCV={() => setIsCVOpen(true)}
			/>

			<Routes>
				{/* Route pour la page principale */}
				<Route path="/" element={<Home onOpenCV={() => setIsCVOpen(true)} />} />

				{/* Route dynamique pour chaque projet */}
				<Route path="/projet/:id" element={<ProjectDetails />} />
			</Routes>
			<CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />

			<ScrollIndicator />
		</Router>
	);
}

export default App;
