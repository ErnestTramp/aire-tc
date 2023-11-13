import "@/css/Book.css";

export default function Book() {
  return (
    <>
      <div className="fullPage-4">
        <div className="bookHero">
          <div className="bookHeroText">
            <h1>Book your session.</h1>
            <p>
              Please use our LoveAdmin booking form below to first, select your
              session and then fill out some important information that we need
              to know about you. Dont worry, you only need to do this once!
            </p>
          </div>
        </div>
        <div className="bookForm">
          <div className="form"></div>
        </div>
      </div>
    </>
  );
}
