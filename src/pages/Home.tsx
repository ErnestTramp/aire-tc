import "@/css/Home.css";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import { Separator } from "@/components/ui/separator";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Home() {
  let imageUrls = [
    "https://i.imgur.com/RGxQhAt.jpg",
    "https://i.imgur.com/cOBuUDb.jpg",
    "https://i.imgur.com/MIGJYVG.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleArrowClick = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length
      );
    } else {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }
  };

  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <>
      <div className="fullPage">
        <div className="hero">
          <div className="heroImg">
            <div
              className="backgroundImage1"
              style={{
                opacity: 1,
                backgroundImage: `url(${imageUrls[currentImageIndex]})`,
              }}
            />
            <BsFillArrowLeftCircleFill
              className="arrow"
              onClick={() => handleArrowClick("left")}
            />
            <BsFillArrowRightCircleFill
              className="arrow rightArrow"
              onClick={() => handleArrowClick("right")}
            />
          </div>
          <div className="heroTextWrapper">
            <h2>Aire Trampoline Club</h2>
            <p>Canterbury - Folkstone - Dover</p>
            <div className="heroButtons">
              <Button variant="secondary" asChild>
                <Link to="/book">Book Now</Link>
              </Button>
            </div>
            <Link className="heroLearn" to="/about">
              learn more.
            </Link>
          </div>
        </div>
      </div>
      <div className="fullPage-2">
        <div className="cardsWrapper">
          <Card
            imageUrl="https://i.imgur.com/MIGJYVG.jpg"
            head="Competitive Squad"
            tag="Our top performing athletes"
          />
          <Card
            imageUrl="https://i.imgur.com/NY2Jpw9.jpg"
            head="Recreational Sessions"
            tag="A warm intro to trampolining"
          />
          <Card
            imageUrl="https://i.imgur.com/xDeLms8.jpg"
            head="Adult Sessions"
            tag="Friendly social sessions"
          />
        </div>
      </div>
      <div className="fullPage-3">
        <div className="aboutContainer">
          <Separator />
          <div className="aboutContent">
            <div className="aboutContentText">
              <h2>
                A safe, welcoming <br /> introduction to trampolining.
              </h2>
              <p>
                Trampolining is one of the best ways to stay fit at any age, all
                while enjoying learning more about your body. Come and learn
                along side us at one Kent's premier trampoline clubs.
              </p>
              <Button asChild>
                <Link to="/book">Book Now</Link>
              </Button>
            </div>
            <div className="aboutContentImgs">
              <div className="aboutImg">
                <div className="aboutBackground"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fullPage-10">
        <div className="infoContainer">
          <h2>About the club.</h2>
          <div className="infoContent">
            <div className="tagCard">
              <strong>20 years of jumping.</strong>
              <p>
                Aire Trampoline Club in Kent was founded in 2003 and has
                developed and trained many trampoline gymnasts throughout its
                history.
              </p>
              <Link to="/book">Learn about how you can be the next.</Link>
            </div>
            <Separator orientation={isMobile ? "horizontal" : "vertical"} />

            <div className="tagCard">
              <strong>Free taster session.</strong>
              <p>
                We are a community organisation, offering a free session for you
                to come and see if you like our club before making any
                decicions.
              </p>
              <Link to="/book">Book yours now, it's free.</Link>
            </div>
            <Separator orientation={isMobile ? "horizontal" : "vertical"} />
            <div className="tagCard">
              <strong>Dexter Millen,</strong>
              <p>
                Oversees the coaching at all locations and has a wealth of
                trampoline experience. He holds a Level 4 Gymnastics Coaching
                Qualification and was recently awarded the B.G. Award of Merit.
              </p>
              <Link to="/book">Meet him and the rest of our team.</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Card = ({ imageUrl, head, tag }: any) => (
  <div className="card">
    <div
      className="cardImg"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="cardText">
      <div className="shownText">
        <h3>{head}</h3>
        <p>{tag}</p>
      </div>
      <div className="hiddenText">
        <Button asChild variant="secondary">
          <Link to="/book">Book Now</Link>
        </Button>
      </div>
    </div>
  </div>
);
