import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {Link  as Nav }from "react-scroll";
import { init } from "ityped";
import "./Contacts.css";

function Contacts(props) {
  const contactRef = useRef();

  const contactArray = ["..LET'S TALK?", "..HABLAMOS?", "..FALAMOS?"];

  useEffect(() => {
    init(contactRef.current, {
      showCursor: true,
      strings: contactArray,
      backDelay: 1500,
      backSpeed: 100,
      loop: true,
    });
  }, []);

  return (
    // <div id="contacts" style={{height:"100vh", backgroundColor: "turquoise"}}>

    <div className="contacts" id="contact" style={{ height: "90vh" }}>
      <div className="center">
        {/* <img className="big-img" src="assets/languages.png" alt="let's talk!" /> */}
        {/* <h1 className="contact-title">...</h1> */}
        <span className="changing" ref={contactRef}></span>
      </div>

      <div className="center">
        <h1 className="contact-cta" style={{textAlign:"center", color:"#646464"}}>Send me an email, download my cv <br className="contact-br"/> or checkout my profiles </h1>
      </div>

      <div className="container">
        <div className="link">
          <Link
            to="/mycv.pdf"
            className="contact-link"
            target="_blank"
            download
          >
            <img src="/download.png" alt="linkedin logo" />
          </Link>
        </div>
        <div className="link">
          <a
            className="contact-link"
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/stefano-pisani-profile"
          >
            <img src="assets/linkedin.png" alt="linkedin logo" />
          </a>
        </div>
        <div className="link">
          <a
            className="contact-link"
            rel="noreferrer"
            href="mailto:sstefano.pisani@gmail.com"
          >
            <img src="assets/Gmail_2020.png" alt="gmail logo" />
          </a>
        </div>
        <div className="link">
          <a
            className="contact-link"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/stefanopisani"
          >
            <img src="assets/github.png" alt="github logo" />
          </a>
        </div>
      </div>
      <Nav className="logo" to="nav-start" smooth={true} duration={1000}>
        <img src="/down.png" alt="logo" className="scroll-up-logo"/>
        <p style={{fontSize: 14, marginLeft: 40, marginTop: -10}}> top </p>
      </Nav>
    </div>
  );
}

export default Contacts;
