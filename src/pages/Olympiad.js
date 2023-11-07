import { Carousel } from "../components/Carousel";
import Navbar from "../components/Navbar";
import "./olympiad.css";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Accordian from "../components/Accordian";

function Globalprincipal() {
  const onButtonClick = () => {
    const pdfUrl = "IATSAT2.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Navbar />
      <div className="header-image">
        {/* <Hero heroImg="https://media.istockphoto.com/id/1180689032/photo/exam-at-school-with-students-taking-educational-admission-test-in-class-thinking-hard-writing.jpg?s=612x612&w=0&k=20&c=nkB1YQaY9UQ6uI3pGLpE2WpgVOYXfT-pszQuph7R7SM=" /> */}
        <div className="img-text">
          <ul>The Longer You Wait For Future,</ul> The Shorter It Will Be.
        </div>
      </div>
      <div className="Quote">
        ❝An Olympiad represent an opportunities at all ages. It empowers
        students with knowledge, skills and confidence. IATSAT is one of the
        fastest growing Olympiad among the students and academic fraternities.
        Our Olympiad is designed to identify the best talents across the globe
        and nurture them for future❞
      </div>
      <div className="Head">
        IATSAT Believes In Creating A Community Of Lifelong Learners,
        Responsible Global Citizens, And Champions Of Our Own Success.
      </div>
      <div className="wrapper">
        <h1>Subjects We Focus On:-</h1>
        <div className="wrapper-text1">

          <div className="subjects">
            <ol>
              <li>English</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>Logical Reasoning</li>
              <li>Verbal Ability</li>
              <li>General Knowledge</li>
            </ol>
          </div>
          <img
            src="https://idsb.tmgrup.com.tr/ly/uploads/images/2020/05/27/37631.jpg"
            className="image1"
            alt="Awards and Rewards"
          />
        </div>

      </div>
      <div className="Head2">Olympiad Stages</div>
      <div className="carousel-div">
        <Carousel />
      </div>
      <div></div>
      <div className="wrapper-2">

        <div className="wrapper-text2">

          <h1>AWARDS AND REWARDS</h1>
          <img
            src="https://www.bergerpaints.com/resources/images/awards-and-certification/gold-award-bagged-2020.png"
            className="image1"
            alt="Awards and Rewards"
          />
          <div>
            <ol className="reward-list">
              <li>Gadgets worth one crore.</li>
              <li>Cash prizes worth one crore.</li>
              <li>Trophy and certificates of excellence.</li>
              <li> Opportunity to become IATSAT’S global ambassador for two years.</li>
              <li>Free mentorship programme up-to five years.</li>
              <li>Scholerships worth 1cr.</li>
              <li>Trip to space Research centre for 15 days.</li>
            </ol>
          </div>
        </div>
      </div>
      <div>
        <h1> To learn more about Olympiads download the pdf:- </h1>
        <div className="Button">
          <button onClick={onButtonClick}>Download PDF</button>
        </div>
      </div>
      <div>
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
      </div>{" "}
      <Accordian />
      <div>
        <Footer />
      </div>
    </>
  );
}
export default Globalprincipal;
