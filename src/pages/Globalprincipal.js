import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "./globalpa.css";
import Footer from "../components/Footer";
import { Carousel } from "../components/Carousel";

function Globalprincipal() {
  return (
    <>
      <Navbar />
      <div>
        <Hero
          cName="hero1"
          heroImg="https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg"
          title="IATSAT"
          text="Global Principals Associate"
        />
      </div>
      <div className="Quote">
        ❝ We believe that in the ever-evolving 21st-century education landscape,
        empowering educators is crucial. To achieve this, IATSAT proudly
        presents the "Global Principals Associate" (GPA) program - a unique
        opportunity for directors, principals, and teachers to upskill and meet
        the challenges of this new era.❞
      </div>

      <div className="Heading">
        <h1>
          At IATSAT, our mission is to create a knowledge-sharing platform
          through the Global Principal Association,the world's first of its
          kind. Our objectives are ambitious and impactful:
        </h1>
      </div>
      <div className="Points">
        <li>
          Learning 21st-century skills from industry experts and implementing
          them in classrooms.
        </li>
        <li>
          Bridging the gap between K-12, universities, and industry, fostering
          innovation in education.
        </li>
        <li>
          Facilitating learning through industry collaborations, training
          sessions, webinars, and seminars across schools.
        </li>
        <li>
          Nurturing and promoting young aspiring teachers and educators through
          specialized training programs.
        </li>
        <li>
          Cultivating effective leadership skills to drive positive change in
          educational institutions.
        </li>
        <li>
          Enhancing digital skills and knowledge to facilitate seamless
          technology integration in learning environments.
        </li>
        <li>
          Emphasizing modern pedagogical approaches to prepare students for a
          future of endless possibilities.
        </li>
        <li>
          Providing mentorship opportunities for new researchers and supporting
          them in publishing their research papers.
        </li>
        <li>
          Encouraging collaboration with foreign schools for enriching student
          exchange programs.
        </li>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
export default Globalprincipal;
