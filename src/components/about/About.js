import React from "react";
import "./About.css";
import { Link } from "react-scroll";



export default function About({ menuOpen, fade }) {
  return (
    <>

      <section className={"about " + (fade && "move")}>
        <div className="about-me">
          
            <div className="about-left">
              <img
                src="/me.png"
                alt=""
                
              />
            </div>

            <div className="about-right">
              <h1>THIS IS ME</h1>
              <p>
                Passionate about surf, travels, and
                food, I have a background in Business and Economics and <b> since 2020  </b>I decided to change my career and follow my dream of becoming a <b> Web Developer ❤️ 💻</b>
              </p>
              
              
              {/* <section className="logo">
                <img src="/images/REACT.png" style={{height:50}}></img>
              </section> */}
            </div>
          </div>
       
        {menuOpen && (
          <Link
            style={{ marginTop: 50 }}
            // className="link-menu"
            to="projects"
            smooth={true}
            duration={1000}
          >
            <img src="/down.png" alt="arrow" className="arrow-down3 arrows" />
          </Link>
        )}
      </section>
      
    </>
  );
}


