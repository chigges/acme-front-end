import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import Login from "./pages/Login";

function App() {
  // Set title of page
  useEffect(() => {
    document.title = "ACME Site";
  }, []);

  return (
    <>
      <Router>
        <div className="dark-theme">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/packages" element={<Packages />} />
              <Route
                path="/login"
                element={<Login onLogin={() => console.log("logged in!")} />}
              />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
  // Self closing syntax: <Message />
}

export default App;
