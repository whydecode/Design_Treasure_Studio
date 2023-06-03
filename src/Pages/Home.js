import "./css/Home.css";
import Navbar from "./Navbar";


import { useEffect, useState } from "react";
import Loader from "./Screens/Loader";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="Home">
          <Navbar />

          <div className="homeContent" id="homeImg">
            <div>
              <h1>Designing spaces</h1>
              <h1>that Inspire and Delight</h1>
            </div>
          </div>
          <div className="website">
            <div className="secondContent"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
