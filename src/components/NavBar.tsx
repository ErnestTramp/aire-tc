import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import "@/css/NavBar.css";
import { Separator } from "./ui/separator";

export default function NavBar() {
  return (
    <header>
      <div className="navInner">
        <NavigationMenu>
          <h1 className="navHeader">
            <Link to="/">Aire TC</Link>
          </h1>
          <Separator orientation="vertical" className="h-[5vh] mr-2" />
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/sessions">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Sessions
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/login">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Member Login
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
