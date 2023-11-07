import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "./about.css";
import Footer from "../components/Footer";
function About() {
  const onButtonClick = () => {
    const pdfUrl = "IATSAT1.pdf";
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
      <div>
        <Hero
          cName="hero1"
          heroImg="https://iatsat.in/static/media/bigCpt.0314cd123d18a2f2dcb4.jpg"
          title="About us"
        />
      </div>
      <div className="Title">
        <h1>Who we are</h1>
        <div className="Subheading">
          <ul>
            <h2>Innovation and Guiding Youth</h2>
            <ul>
              <p>Focus on innovation in education.</p>
            </ul>
            <ul>
              <p>Nurturing young minds for success.</p>
            </ul>
          </ul>
        </div>
        <div className="Subheading">
          <ul>
            <h2>Assessment Platform</h2>
            <ul>
              <p>
                Building a large assessment platform for higher education and
                industry needs.
              </p>
            </ul>
            <ul>
              <p>
                Creating the Largest International Olympiad for K-12 students.
              </p>
            </ul>
          </ul>
        </div>
        <div className="Subheading">
          <ul>
            <h2>Virtual University Concept</h2>
            <ul>
              <p>Introducing a revolutionary Virtual University Concept</p>
            </ul>
          </ul>
        </div>
      </div>
      <div className="Subheading">
        <ul>
          <h2>Inclusive Platform</h2>
          <ul>
            <p>Providing access to quality education for every child.</p>
          </ul>
          <ul>
            <p>
              Offering opportunities for youth to achieve their aspirations.
            </p>
          </ul>
        </ul>
      </div>
      <div className="Subheading">
        <ul>
          <h2>Mission 2030</h2>
          <ul>
            <p>Establishing over 350 Centers of Excellence (COE) by 2030.</p>
          </ul>
          <ul>
            <p>
              Bridging the gap between K-12 education, universities, and
              industry.
            </p>
          </ul>
        </ul>
      </div>
      <div className="Subheading">
        <ul>
          <h2>COE Objectives</h2>
          <ul>
            <p>
              Imparting skills, facilitating reskilling, and enabling upskilling
              of students.
            </p>
          </ul>
          <ul>
            <p>Building a skilled and competent workforce.</p>
          </ul>
        </ul>
      </div>
      <div className="Subheading">
        <ul>
          <h2>Global Principal Network</h2>
          <ul>
            <p>Building a Global Principal Network for educators.</p>
          </ul>
          <ul>
            <p>
              Aiming to include over 100,000 Principals, Directors & Founders by
              the end of 2024 to create largest knowledge platform.
            </p>
          </ul>
        </ul>
      </div>
      <div className="wrapper">
        <div className="wrapper-text1">
          <h1>Our Mission:-</h1>
          <p>
            We are committed to realizing our vision by facilitating
            resource-based learning that drives exponential growth. Our mission
            is to enable economic independence through education within our
            community, ensuring that everyone has access to the knowledge,
            resources, and opportunities needed to build a brighter and more
            prosperous future."
          </p>
        </div>
        <img
          src="https://st3.depositphotos.com/2924751/15009/i/450/depositphotos_150096868-stock-photo-3d-rendered-illustration-of-target.jpg"
          className="image1"
          alt="Mission"
        />
      </div>
      <div className="wrapper-2">
        <img
          src="https://images.unsplash.com/photo-1585776245865-b92df54c6b25?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="image1"
          alt="Awards and Rewards"
        />
        <div className="wrapper-text2">
          <h1>OUR VISION</h1>
          <p>
            "At IATSAT, we aspire to influence global priorities for the future
            by embracing experiential learning as our core belief. Our vision is
            to create a world where knowledge is a catalyst for positive change,
            empowering individuals and communities alike."
          </p>
        </div>
      </div>
      <div>
        <h1> To learn more about us download the pdf:- </h1>
        <div className="Button">
          <button onClick={onButtonClick}> Download PDF </button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
export default About;
