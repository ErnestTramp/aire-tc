import "@/css/Home.css";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "@/assets/scroll1.json";
import { Separator } from "@/components/ui/separator";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Home() {
  const aniRef = useRef<LottieRefCurrentProps>(null);
  aniRef.current?.setSpeed(0.7);

  const [animation, setAnimation] = useState(<p></p>);
  window.setTimeout(() => {
    setAnimation(
      <Lottie lottieRef={aniRef} animationData={animationData} loop={true} />
    );
  }, 500);

  let imageUrls = ["hero.jpg", "1100.jpg", "6457.jpg", "1102.jpg", "1316.jpg"];

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
              <Button asChild>
                <Link to="/book">Book Now</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="scroll-down">{animation}</div>
      </div>
      <div className="fullPage-2">
        <div className="cardsWrapper">
          <Card
            imageUrl="/1100.jpg"
            head="Competitive Squad"
            tag="Our top performing athletes"
          />
          <Card
            imageUrl="/1102.jpg"
            head="Recreational Sessions"
            tag="A warm intro to trampolining"
          />
          <Card
            imageUrl="/1316.jpg"
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
      <div className="fullPage-3">
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
            <div className="tagCard">
              <strong>Free taster session.</strong>
              <p>
                We are a community organisation, offering a free session for you
                to come and see if you like our club before making any
                decicions.
              </p>
              <Link to="/book">Book yours now, it's free.</Link>
            </div>
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
