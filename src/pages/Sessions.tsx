import "@/css/Sessions.css";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function Sessions() {
  return (
    <div className="flex flex-col items-center">
      <div className="fullPage-8">
        <div className="sessionsHero">
          <h1>Recreational Sessions</h1>
          <p>
            With our progressive and rewarding sessions, every gymnast is
            encouraged and challenged by our innovative coaching. Following the
            British Gymnastics Proficiency Awards, we develop the fundamental
            basics for any gymnast to succeed.
          </p>
          <p>
            Our recreational sessions are priced at £7.00 or £8.75 for 1 and 1
            and a quarter hour sessions and for the first two sessions, this is
            all that you would pay.
          </p>
        </div>
        <Separator></Separator>
        <div className="sessions">
          <div className="session canterbury">
            <h3>Canterbury</h3>
            <p>
              Most of our sessions jump at St Anselm’s Catholic School,
              Canterbury. We have 4 Eurotramp Ultimate Trampolines and
              associated matting. St Anselm’s Catholic Schools is the home of
              our Competition Squads.
            </p>
            <Table className="table">
              <TableCaption>
                We offer a sibling discount of £2.00 per month from each invoice
                as well as a 25% discount should a gymnast attend one or more
                sessions in a week.
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Day of the week</TableHead>
                  <TableHead>Age Group</TableHead>
                  <TableHead className="text-right">Times</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Tuesday</TableCell>
                  <TableCell>
                    <ul className="flex flex-col gap-2">
                      <li>Advanced Rec</li>
                      <li>8-10 year olds</li>
                      <li>10+ years old</li>
                      <li>12+ years old</li>
                    </ul>
                  </TableCell>
                  <TableCell className="text-right">
                    <ul className="flex flex-col gap-2">
                      <li>4:00pm – 5:15pm</li>
                      <li>5:00pm – 6:00pm</li>
                      <li>6:00pm – 7:15pm</li>
                      <li>7:15pm – 8:30pm</li>
                    </ul>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Wednesday</TableCell>
                  <TableCell>
                    <ul className="flex flex-col gap-2">
                      <li>5-7 year olds</li>
                      <li>8-10 year olds</li>
                      <li>10+ years old</li>
                      <li>12+ years old</li>
                    </ul>
                  </TableCell>
                  <TableCell className="text-right">
                    <ul className="flex flex-col gap-2">
                      <li>4:00pm – 5:15pm</li>
                      <li>5:00pm – 6:00pm</li>
                      <li>6:00pm – 7:15pm</li>
                      <li>7:15pm – 8:30pm</li>
                    </ul>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Friday</TableCell>
                  <TableCell>
                    <ul className="flex flex-col gap-2">
                      <li>5-7 year olds</li>
                      <li>Advanced Rec</li>
                      <li>10+ years old</li>
                      <li>12+ years old</li>
                    </ul>
                  </TableCell>
                  <TableCell className="text-right">
                    <ul className="flex flex-col gap-2">
                      <li>4:00pm – 5:00pm</li>
                      <li>5:00pm – 6:15pm</li>
                      <li>6:00pm – 7:15pm</li>
                      <li>7:15pm – 8:30pm</li>
                    </ul>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Saturday</TableCell>
                  <TableCell>
                    <ul className="flex flex-col gap-2">
                      <li>5-7 year olds</li>
                      <li>8-10 year olds</li>
                      <li>10+ years old</li>
                      <li>12+ years old</li>
                    </ul>
                  </TableCell>
                  <TableCell className="text-right">
                    <ul className="flex flex-col gap-2">
                      <li>9:00am – 10:00am</li>
                      <li>10:00am – 11:00am</li>
                      <li>11:00am – 12:15pm</li>
                      <li>12:15pm – 1:30pm</li>
                    </ul>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <Separator></Separator>

          <div className="session dover">
            <h3>Dover</h3>
            <p>
              Our Dover satellite club jumps at the amazing Dover District
              Leisure Centre. We were lucky enough to have been supported by the
              Roger De Haan Charity Trust and have 4 Eurotramp Ultimate
              Trampolines and associated matting. Aire Trampoline Club is a Gold
              Member Club for The Sports Trust.
            </p>
            <Table className="table">
              <TableCaption>
                We offer a sibling discount of £2.00 per month from each invoice
                as well as a 25% discount should a gymnast attend one or more
                sessions in a week.
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Day of the week</TableHead>
                  <TableHead>Age Group</TableHead>
                  <TableHead className="text-right">Times</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Monday</TableCell>
                  <TableCell>
                    <ul className="flex flex-col gap-2">
                      <li>5-7 year olds</li>
                      <li>8-10 year olds</li>
                      <li>10+ years old</li>
                      <li>12+ years old</li>
                    </ul>
                  </TableCell>
                  <TableCell className="text-right">
                    <ul className="flex flex-col gap-2">
                      <li>4:00pm – 5:00pm</li>
                      <li>5:00pm – 6:00pm</li>
                      <li>6:00pm – 7:15pm</li>
                      <li>7:15pm – 8:30pm</li>
                    </ul>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <Separator></Separator>
          <div className="session folkstone">
            <h3>Sandwich</h3>
            <p>
              This is our second satellite club jumping at Sandwich Leisure
              Centre, SANDWICH. We train on a Thursday evening with four
              trampolines.
            </p>
            <Table className="table">
              <TableCaption>
                We offer a sibling discount of £2.00 per month from each invoice
                as well as a 25% discount should a gymnast attend one or more
                sessions in a week.
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Day of the week</TableHead>
                  <TableHead>Age Group</TableHead>
                  <TableHead className="text-right">Times</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Thursday</TableCell>
                  <TableCell>
                    <ul className="flex flex-col gap-2">
                      <li>4-9 year olds</li>
                      <li>10+ years old</li>
                    </ul>
                  </TableCell>
                  <TableCell className="text-right">
                    <ul className="flex flex-col gap-2">
                      <li>5:15pm – 6:15pm</li>
                      <li>6:15pm – 7:30pm</li>
                    </ul>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        <Separator></Separator>
        <div className="sessionsHero">
          <h1>Adult Sessions</h1>
          <p>
            Trampolining is a fantastic alternative to the drag of the gym.
            Start now with our adult trampoline sessions at St Anselm’s Catholic
            School in Canterbury. Experience the thrill of soaring through the
            air while enjoying a calorie-burning workout—10 minutes on the
            trampoline is equivalent to 30 on a treadmill. With a relaxed
            atmosphere and qualified coaches, our Wednesday evening sessions
            (8:30pm-9:45pm) cater to all ages and abilities. Book now for
            only... <span className="font-bold text-[1.3vw]">£8.15</span>.
          </p>
          <Button>Book now</Button>
        </div>
        <Separator></Separator>
        <div className="sessionsHero">
          <h1>Competition Squad</h1>
          <p>
            All of our squads are by{" "}
            <span className="font-bold">INVITATION ONLY</span>. New members will
            firstly attend our RECREATIONAL SESSIONS before receiving an invite
            for our competitive squads.
          </p>
          <p>
            Our club has a strong record of producing county, regional, and
            national performers, with participation in international training
            camps. Squad gymnasts experience dedicated coaching with low ratios
            per trampoline on our Eurotramp Ultimate Trampolines in Canterbury.
            Comprehensive conditioning, both on and off the trampoline, and
            personalized training programs elevate individual skills.
          </p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell className="font-medium">Session</TableCell>
                <TableCell className="font-medium">Description</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-bold padding">Diddy Squad</TableCell>
                <TableCell>
                  Our youngest talent, aged 4-7 building on the fundamentals
                  from recreational sessions. Progressing into the competitive
                  world with fun, focused sessions and plenty of somersaults!
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold padding">
                  Junior Squad
                </TableCell>
                <TableCell>
                  Designed to pick up and enhance our younger gymnasts from
                  recreational sessions to boost skills and increase confidence
                  in the sport.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold padding">
                  Junior Performance Pathway
                </TableCell>
                <TableCell>
                  For gymnasts in our Junior Squad who progress into more
                  complex skills at a younger age than our Senior Performance
                  athletes. Gymnasts increase training hours and become more
                  independent in the sport.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold padding">
                  Senior Performance Squad
                </TableCell>
                <TableCell>
                  Our oldest and most talented athletes, competing at National
                  level and above. These gymnasts are able to make full use of
                  the facility to progress and improve independently alongside
                  our high quality coaches.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
