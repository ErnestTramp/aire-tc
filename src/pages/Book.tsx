import "@/css/Book.css";

import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Book() {
  return (
    <>
      <div className="fullPage-4">
        <div className="bookHero">
          <div className="bookHeroText">
            <h1>Book your session.</h1>
            <p>
              Please use our LoveAdmin booking form to first, select your
              session and then fill out some important information that we need
              to know about you. Dont worry, you only need to do this once!
            </p>
            <p>
              After you have done this for the first time, you can use our{" "}
              <Link to="/login">Member Login</Link> page to manage your payments
              and sessions!
            </p>
          </div>
        </div>
        <div className="bookForm">
          <Card className="h-[100%]">
            <CardContent></CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
