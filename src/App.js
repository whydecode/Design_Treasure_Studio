import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Screens/Home";
import Contact from "./Pages/Screens/Contact";
import About from "./Pages/Screens/About";
import { useEffect, useState } from "react";
import Loader from "./Pages/Screens/Loader";
import Navbar from "./Pages/Screens/Navbar";
import Footer from "./Pages/Screens/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          <div className="app-container">
            <Navbar />
            <div className="content">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
