import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let me <span style={{ color: "#FFD700" }}> introduce </span> myself:
            </h1>
            <p className="home-about-body">
              I want and strive to make things come alive in coding, which is why I am in so many domains at once RN.
              <br />
              <br />I am fluent in the classics like:
              <i>
                <b style={{ color: "#FFD700" }}> C++, C, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
              <b style={{ color: "#FFD700" }}>Web Development, & AI-Integrated Applications</b> and also in areas related to{" "}
              <b style={{ color: "#FFD700" }}>Machine Learning, NLP, Computer Vision</b>.

              </i>
              <br />
              <br />
              Whenever possible, I also try to apply my passion for developing products
              with: <b style={{ color: "#FFD700" }}>Python</b> and
              <i>
                <b style={{ color: "#FFD700" }}>Machine Learning Libraries and Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b style={{ color: "#FFD700" }}> TensorFlow, Keras, and PyTorch</b>
              </i>, as well as using
              <i>
                <b style={{ color: "#FFD700" }}> React.js, Vite, and Tailwind CSS</b>
              </i> for frontend development.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            <img
              src={myImg}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "300px", borderRadius: "50%", width: "300px", height: "600px", objectFit: "cover" }}
            />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Catch me on:</h1>
            <p>
              Feel free to <span style={{ color: "#FFD700" }}>connect </span>with me:
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/completelyblank"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="www.linkedin.com/in/muhammad-raza-khan-95ab45242"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
