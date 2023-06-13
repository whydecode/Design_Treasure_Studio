import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Screens/Home";
import Contact from "./Pages/Screens/Contact";
import About from "./Pages/Screens/About";
import { useEffect, useState } from "react";
import Loader from "./Pages/Screens/Loader";
import Navbar from "./Pages/Screens/Navbar";

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
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
