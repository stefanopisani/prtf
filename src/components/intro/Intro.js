import "./Intro.css";
import {Link} from "react-scroll";

export default function Intro({ menuOpen, setMenuOpen }) {

  return (
    <>
     <div className={"intro1 " + (menuOpen && "activebg")} id="intro">
      
        <div className="Iam-container">
          <div class="Iam">
            <p>This is</p>
            <b>
              <div class="innerIam"  onClick={() => setMenuOpen(!menuOpen)}>
                my portfolio
                <br />
                built with React
                <br />
                not centered
                <br />
                a copy-paste master
                <br />
                clickable
              </div>
            </b>
            <br />
          </div>
        </div>

      {menuOpen && 
      <Link className="link-menu" to="about" smooth={true} duration={1000}>
      <img src="/down.png" alt="arrow" className="arrow-down1"/>
      </Link>
      }  

     </div>
    </>
  );
}
