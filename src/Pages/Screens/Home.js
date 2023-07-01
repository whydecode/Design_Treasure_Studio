import "../css/Home.css";
import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
  ParallaxProvider,
} from "react-scroll-parallax";
import puja from "../Files/Puja.png";
import living from "../Files/Living.jpg";
// import homeImg from "../Files/homeImg.png";
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
            <ParallaxBannerLayer image={living} speed={isMobile ? 0 : 5} />
            <ParallaxBannerLayer speed={isMobile ? 0 : -10}>
              <h1>Designing spaces</h1>
              <h1>that Inspire and Delight</h1>
            </ParallaxBannerLayer>
          </ParallaxBanner>
        </ParallaxProvider>
      </div>

      <div className="services">
        <div className="services-content">
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit porro
            dolore quae aut, quaerat distinctio animi sequi vel, consequatur
            harum similique. Labore tempore dolorum laudantium, libero id vitae
            reprehenderit dolor! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iusto eos quibusdam excepturi aperiam at odit
            nihil harum exercitationem quas rem? Mollitia error ipsa id labore
            dolore quia recusandae quos provident?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            soluta est minima, corrupti esse eligendi, laboriosam hic, minus
            temporibus expedita ab assumenda unde nihil architecto provident
            reiciendis ut atque nemo!
          </p>
        </div>
        <img src={puja} alt="Interior" className="services-image" />
      </div>
      <div className="projects">
        <div className="project"></div>
        <div className="project"></div>
        <div className="project"></div>
      </div>
    </div>
  );
}

export default Home;
