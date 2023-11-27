import "@/css/MobileNav.css";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const closeSheet = () => {
    setOpen(false);
  };

  return (
    <header>
      <div className="navInner">
        <h1>
          <Link to="/">Aire TC</Link>
        </h1>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <Button variant="outline">
              <GiHamburgerMenu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Aire TC</SheetTitle>
              <SheetDescription>
                Navigate to our different pages here.
              </SheetDescription>
            </SheetHeader>
            <div className="navLinks">
              <Button variant="outline" onClick={closeSheet}>
                <Link to="/">Home</Link>
              </Button>
              <Button variant="outline" onClick={closeSheet}>
                <Link to="/about">About Us</Link>
              </Button>
              <Button variant="outline" onClick={closeSheet}>
                <Link to="/sessions">Sessions</Link>
              </Button>
              <Button variant="outline" onClick={closeSheet}>
                <Link to="/contact">Contact us</Link>
              </Button>
              <Button variant="outline" onClick={closeSheet}>
                <Link to="/login">Member Login</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
