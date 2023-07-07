import React from "react";

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
            <div>
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
