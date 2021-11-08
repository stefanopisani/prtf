import React, { useEffect, useRef, useState } from "react";
import { init } from "ityped";
import { Link } from "react-scroll";
import "./intro2.css";

export default function Intro2({ menuOpen, setMenuOpen, setFade }) {
  const textRef = useRef();
  const welcomeRef = useRef();
  const [change, setChange] = useState(true);
  

  const changeEffect = () => {
    setChange(false);
  };

  let strings = [
    "I built it with React",
    "Apparently it's cool!",
    "Click here to check it out!",
  ];

  if (!change) {
    strings = ["Full Stack Web Developer"];
  } 

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: strings,
      backDelay: 1500,
      backSpeed: 100,
      loop: change,
    });
  }, [setMenuOpen]);  //!NOT WORKING - DOESN?T RUN AGAIN THE USEEFFECT

  return (
    <>
      <main className={"intro " + (menuOpen && "activebg")} id="intro">
        {!menuOpen ? (
          <h1
            className="intro-content"
            onClick={() => {
              setMenuOpen(!menuOpen);
              changeEffect();
            }}
          >
            This is my portfolio
            <br />
            <span
              className="intro-content changing"
              ref={textRef}
              onClick={() => {
                setMenuOpen(!menuOpen);
                changeEffect();
              }}
            ></span>
          </h1>
        ) : (
          <>
            <h1
              className="intro-content name"
              onClick={() => 
              window.location.reload()
              // setMenuOpen(!menuOpen)
              }
            >
              Stefano Pisani
            </h1>
            <h2 className="role"> Full stack Web Developer </h2>
          </>
        )}
      </main>
      <div className="arr">
        {menuOpen && (
          <Link
            className="link-menu active-bg"
            to="about"
            smooth={true}
            duration={1000}
            onClick={()=>setFade(true)}
          >
            <img src="/down.png" alt="arrow" className="arrow-down2 arrows" />
          </Link>
        )}
      </div>
    </>
  );
}
