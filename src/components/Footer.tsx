import "@/css/Footer.css";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
      <p>Copyright @ 2020 - Aire Trampoline Club.</p>
      <div className="socials">
        <AiOutlineInstagram />
        <AiOutlineTwitter></AiOutlineTwitter>
        <AiOutlineFacebook></AiOutlineFacebook>
        <AiOutlineYoutube></AiOutlineYoutube>
      </div>
    </footer>
  );
}
