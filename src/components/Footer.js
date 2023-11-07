import "./FooterStyle.css";
const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newsletter - Register Now and get the latest updates</h1>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i class="fa-regular fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container-padding">
          <div className="box logo">
            <h1>IATSAT</h1>
            <span>Bringing innovation in Global Education and Learning</span>
            <p></p>
          </div>


          <div className="links-iatsat">
            <div className="box-link1">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a className="Home" href="/"> Home</a>

                </li>
                <li>
                  <a className="About" href="/about"> About</a>

                </li>
                <li>
                  <a className="Globalprincipal" href="/globalprincipal">  Global Principal</a>

                </li>
              </ul>
            </div>
            <div className="box-link2">
              <h3>Contact Us:-</h3>
              <ul>
                <ul>125 Inderpur Road Mouza Badripur, Dehradun UR 248012</ul>
                <ul>pr.iatsat@gmail.com</ul>
                <ul>7838397713</ul>
              </ul>
            </div>
          </div>
          <div className="box-last">
            <ul>
              <a href="https://m.facebook.com/profile.php/?id=100066565094087&name=xhp_nt__fb__action__open_user">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </ul>
            <ul>
              <a href="https://www.instagram.com/iatsatolympiad/#">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </ul>
            <ul>
              <a href="https://www.instagram.com/iatsatolympiad/#">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>Copyright © 2023 IATSAT. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
