import React from "react";
import Glass from "./Glass";
import "./skills.css";

export default function Skills() {
  const skills = [
    "React Native",
    "React",
    "Redux",
    "Javascript",
    "HTML",
    "CSS",
    "Node",
    "Typescipt",
    "Unity",
    "Git",
  ];

  return (
    <div>
      <h1>Skills</h1>
      <div className="skillContainer">
        {skills.map((item) => {
          return (
            <Glass className="skillItem">
              <div>
                <span>{item}</span>
              </div>
            </Glass>
          );
        })}
      </div>
    </div>
  );
}
