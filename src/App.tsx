import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import './App.css'
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Packages from "./pages/Packages";

function App() {
	// Set title of page
	useEffect(() => {
		document.title = "Home";
	}, []);

	return (
	<>
		<Router>
			<div className="dark-theme">
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="/packages" element={<Packages />} />
						<Route path="/help" element={<Help />} />
					</Route>
				</Routes>
			</div>
		</Router>
	</>
	);
	// Self closing syntax: <Message />
}

export default App;
