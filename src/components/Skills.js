import React from "react";
import Glass from "./Glass";

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
      <div>
        {skills.map((item) => {
          return (
            <Glass>
              <p>{item}</p>
            </Glass>
          );
        })}
      </div>
    </div>
  );
}
