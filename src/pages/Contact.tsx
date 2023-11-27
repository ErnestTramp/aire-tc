import { Card, CardContent, CardHeader } from "@/components/ui/card";
import "@/css/Contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="fullPage-8">
      <div className="contactHeader">
        <h1>Lets chat</h1>
        <p>
          If you have any questions, or you need help booking, please dont
          hesitate to call or shoot us an email!
        </p>
      </div>
      <div className="contactCards">
        <Card className="contactCard">
          <CardHeader>
            <FaPhoneAlt></FaPhoneAlt>
          </CardHeader>
          <CardContent>
            <Link
              to="#"
              onClick={() => {
                window.location.href = "tel:01227471744";
              }}
            >
              01227 471744
            </Link>
          </CardContent>
        </Card>
        <Card className="contactCard">
          <CardHeader>
            <MdEmail></MdEmail>
          </CardHeader>
          <CardContent>
            <Link
              to="#"
              onClick={() => {
                window.location.href = "mailto:reception@aire.tc";
              }}
            >
              reception@aire.tc
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
