import "@/css/About.css";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="flex flex-col items-center">
      <div className="fullPage">
        <div className="aboutHero">
          <div className="aboutHeroText">
            <div className="aboutHeroTextFirst">
              <p>Aire is about,</p>
              <h1>Community driven progression.</h1>
            </div>
            <div className="aboutHeroTextBottomRow">
              <div className="aboutHeroTextBottom1">
                <p>
                  As a club we are passionate about providing each gymnast the
                  chance to participate in a safe and rewarding environment that
                  emphasises enjoyment and skill learning.
                </p>
              </div>
              <div className="aboutHeroTextBottom">
                <Link to="/">Meet us</Link>
                <div className="teamInfo">
                  <div className="teamInfoImages">
                    <div className="teamImage1"></div>
                    <div className="teamImage2"></div>
                    <div className="teamImage3"></div>
                    <div className="teamImage4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separator className="w-[70%]" />
      <div className="fullPage-5">
        <div className="textRow">
          <div className="textItem first">
            <h2>
              Established in <span className="italic">2003</span>,{" "}
            </h2>
            <p>we boast a rich history nurturing trampoline gymnasts.</p>
          </div>
          <div className="textItem second">
            <h2>
              We began in a <span className="italic">school hall</span>,{" "}
            </h2>
            <p>
              growing from zero to 20 members before moving to a commercial unit
              in 2009.
            </p>
          </div>
        </div>
        <div className="textRow">
          <div className="textItem third">
            <h2>
              With 13 <span className="italic">Olympic</span> trampolines,{" "}
            </h2>
            <p>
              including 7 Eurotramp Ultimate Trampolines, we offer top-notch
              facilities.
            </p>
          </div>
          <div className="textItem fourth">
            <h2>
              If you're <span className="italic">interested</span>,{" "}
            </h2>
            <p>
              join us through our recreational sessions, where squad members are
              selected.
            </p>
          </div>
        </div>
      </div>
      <Separator className="w-[70%]" />

      <div className="fullPage-6">
        <div className="storyWrapper">
          <p>
            Aire Trampoline Club's dynamic journey began in a Kent school hall,
            evolving into a thriving community. A move to Canterbury in 2009
            symbolized growth, though setbacks in 2020 led to a return. Now
            spanning Folkestone and Sandwich, the club, guided by Director of
            Coaching Dexter Millen, stands as a beacon of trampolining
            excellence, inspiring Olympic dreams.
          </p>
          <Button asChild>
            <Link to="/book">Book Now.</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
