import "../css/Home.css";
import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
  ParallaxProvider,
} from "react-scroll-parallax";
import image1 from "../Files/image1.png";
import image2 from "../Files/image2.jpg";
import image3 from "../Files/image3.png";
import homeImg from "../Files/homeImg.png";
import { useEffect, useState } from "react";
function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="Home">
        {/* <div className="homeContent" id="homeImg">
          <div>
            <h1>Designing spaces</h1>
            <h1>that Inspire and Delight</h1>
          </div>
        </div>
        <div className="website">
          <div className="secondContent"></div>
        </div> */}
        <ParallaxProvider>
          <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
            <ParallaxBannerLayer image={homeImg} />
            <ParallaxBannerLayer speed={isMobile ? 0 : -10}>
              <h1>Designing spaces</h1>
              <h1>that Inspire and Delight</h1>
            </ParallaxBannerLayer>
          </ParallaxBanner>
        </ParallaxProvider>
      </div>

      <div className="parallaxImages">
        <ParallaxProvider>
          <Parallax speed={isMobile ? -2 : -5} className="parallex-div">
            <img src={image1} alt="" className="parallax-image" />
          </Parallax>
          <Parallax
            speed={isMobile ? 3 : 10}
            className="parallex-div"
            style={{ textAlign: "end" }}
          >
            <img src={image2} alt="" className="parallax-image" />
          </Parallax>
          <Parallax speed={isMobile ? -3 : -10} className="parallex-div">
            <img src={image3} alt="" className="parallax-image" />
          </Parallax>
        </ParallaxProvider>
      </div>
    </div>
  );
}

export default Home;
