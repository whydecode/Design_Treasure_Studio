import React, { useEffect, useState } from "react";
import "../css/Loader.css";
const images = [
  require("../Files/loadImg1.jpg"),
  require("../Files/loadImg2.png"),
  require("../Files/loadImg3.png"),
  require("../Files/loadImg4.png"),
];
const Loader = () => {
  const [index, setIndex] = useState(1);
  useEffect(() => {
    const logoDelay = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    const timer = setInterval(
      () => setIndex((index) => (index + 1) % images.length),
      500
    );

    return () => {
      clearInterval(timer);
      clearTimeout(logoDelay);
    };
  }, []);
  const [delay, setIsLoading] = useState(true);
  return (
    <div id="loadParent">
      <div className="loader">
        <div className="loadingImages">
          {delay ? (
            <img
              src={require("../Files/LOGO_light.png")}
              alt="image1"
              className="logoImage"
            />
          ) : (
            <img src={images[index]} alt="image1" className="renderImage" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Loader;
