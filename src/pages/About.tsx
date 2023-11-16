import "@/css/About.css";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="fullPage">
        <div className="aboutHero">
          <div className="aboutHeroText">
            <div className="aboutHeroTextFirst">
              <h1 className="community">
                Community <IoIosArrowForward />
              </h1>
              <h1 className="driven">driven</h1>
              <h1 className="progression">progression</h1>
            </div>
            <div className="aboutHeroTextSecond">
              <p>
                {
                  "{ Aire Trampolining Club is a non-profit community organisation. }"
                }
              </p>
            </div>
            <div className="aboutHeroTextBottomRow">
              <div className="aboutHeroTextBottom">
                <Link to="/">Meet us.</Link>
                <div className="teamInfo">
                  <p className="flex items-center gap-1">
                    Our team <IoIosArrowForward className="translate-y-[10%]" />
                  </p>
                  <div className="teamInfoImages">
                    <div className="teamImage1"></div>
                    <div className="teamImage2"></div>
                    <div className="teamImage3"></div>
                    <div className="teamImage4"></div>
                  </div>
                </div>
              </div>
              <div className="aboutHeroTextBottom1">
                <p>
                  As a club we are passionate about providing each gymnast the
                  chance to participate in a safe and rewarding environment that
                  emphasises enjoyment and skill learning.
                </p>
              </div>
            </div>
          </div>
          <div className="aboutHeroImage"></div>
        </div>
      </div>
    </>
  );
}
