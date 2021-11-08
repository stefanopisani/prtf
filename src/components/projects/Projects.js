import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import "./Projects.css";

export default function Projects() {
  return (
    <>
      <section id="projects">
        <div className="arrow-projects">
          <h1> MY PROJECTS </h1>
        </div>
        <div className="main-projects">
          <a
            class="wrapper-project"
            rel="noreferrer"
            target="_blank"
            href="https://rides-io.com"
          >
            <div className="card-project">
              <img src="/rides.png" alt="proj-img" className="card-image" />
              <h2 className="card-title">Rides 🏝 </h2>
              <p className="card-text">
                Full stack MERN application created with the intent of
                connecting surfers and facilitating the way they get into the
                surf spot
              </p>
            </div>
          </a>

          <a
            class="wrapper-project"
            rel="noreferrer"
            target="_blank"
            href="https://rides-io.com"
          >
            <div className="card-project">
              <img src="/feed.png" alt="proj-img" className="card-image" />
              <h2 className="card-title">Feed 🥙</h2>
              <p className="card-text">
                Photo-sharing app about the joy of simple, memorable meals,
                inspired by our favorite go-to recipes: friends and
                family.
              </p>
              {/* <p className="card-text">
               Photo-sharing app about the joy of simple, memorable meals. Feed
                was inspired by our favorite go-to recipes and how we learned to
                cook them: through friends and family.
              </p> */}
            </div>
          </a>

          <a
            class="wrapper-project"
            rel="noreferrer"
            target="_blank"
            href="https://delivery-vespa.netlify.app/"
          >
            <div className="card-project">
              <img src="/pizza.png" alt="proj-img" className="card-image" />
              <h2 className="card-title">Delivery Pizza 🎮</h2>
              <p className="card-text">
                My very first project. A simple game created using vanilla
                Javascript for the logic and canvas for the animations.
              </p>
            </div>
          </a>
        </div>
        <div className="arrow-projects">
          <Link
            style={{ marginTop: 50 }}
            to="contacts"
            smooth={true}
            duration={1000}
          >
            <img src="/down.png" alt="arrow" className="arrow-down4 arrows" />
          </Link>
        </div>
      </section>
    </>
  );
}
