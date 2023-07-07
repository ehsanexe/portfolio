import React from "react";
import me from "../assets/me.png";
import "./about.css";

export default function About() {
  return (
    <div className="aboutContainer">
      <div className="profileImage">
        <img src={me} />
        <div className="glass" />
        <div className="lines" />
      </div>
      <div>
        <p>
          Hi, my name is <h1>Muhammad Ehsan Shafique</h1> I'm a Sofware Engineer
          graduated from NED University in Software Engineering. I enjoy
          building digital solutions. Currently my main expertise is in app
          building using technologies like react native. I also enjoy working in
          MERN stack in my spare time.
        </p>
      </div>
    </div>
  );
}
