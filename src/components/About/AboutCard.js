import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Heya everyone, my name is: <span style={{ color: "#9f700c" }}>Muhammad Raza Khan </span> 
           from <span style={{ color: "#9f700c" }}> Karachi, Pakistan.</span>
            <br />
            I am currently a student in my Junior Year of University.
            <br />
            I am a 3rd Year doing Bachelors in Computer Science (BS-CS) @ Fast NUCES.
            <br />
            <br />
            Apart from coding, here are some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Football.
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading & Writing.
            </li>
            <li className="about-activity">
              <ImPointRight /> Table Tennis.
            </li>
            <li className="about-activity">
              <ImPointRight /> Art in all forms.
            </li>
          </ul>

          <p style={{ color: "rgb(184, 134, 11)" }}>
            "I try and understand."{" "}
          </p>
          <footer className="blockquote-footer">Muhammad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
