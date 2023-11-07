import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1630178836733-3d61d8974258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        title="IATSAT"
        text="100% Philanthropic Edtech Company"
      />
      <div>
        <Footer />
      </div>
    </>
  );
}
export default Home;
