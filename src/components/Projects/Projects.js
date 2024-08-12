import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pixelOdyssey from "../../Assets/Projects/pixelOdyssey.jpg";
import anime from "../../Assets/Projects/anime.png";
import neuroto from "../../Assets/Projects/neuroto.png";
import fashion_GANN from "../../Assets/Projects/fashion_gann.png";
import multedio from "../../Assets/Projects/multedio.png";
import handtrack from "../../Assets/Projects/handtrack.png";
import blankshowcase from "../../Assets/Projects/blankshowcase.png";
import terra from "../../Assets/Projects/terra.png";
import vulner from "../../Assets/Projects/vulner.jpeg";
import axnos from "../../Assets/Projects/axnos.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works: </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={neuroto}
              isBlog={false}
              title="Neuroto"
              description="DNN for Image Classification + YOLOV8 for Object Detection. Classification and Modelling not perfect in some cases."
              ghLink="https://github.com/completelyblank/Neuroto"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={multedio}
              isBlog={false}
              title="Multedio"
              description="A Lightroom duplicate made on C (using GTK & openCV libraries) and utilizing OS concepts like MultiProcessing, MultiThreading, & Inter Process Communication."
              ghLink="https://github.com/completelyblank/Multedio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={axnos}
              isBlog={false}
              title="Axnos (Discontinued)"
              description="A Flutter Game Project that uses OOP and DS Concepts and has a big story. (Will remake in a better Game Engine)"
              ghLink="https://github.com/completelyblank/Axnos"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pixelOdyssey}
              isBlog={false}
              title="Pixel Odyssey"
              description="Pixel Odyssey is an expansive 2D open-world game that blends pixel art, C++ object-oriented programming (OOP), and data structures (DS). Leverages the graphical capabilities of SFML (Simple and Fast Multimedia Library)."
              ghLink="https://github.com/completelyblank/Pixel-Odyssey"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fashion_GANN}
              isBlog={false}
              title="Fashion_GANN"
              description="TensorFlow GAN for Fashion MNIST. Generates new fashion images with Flask backend & interactive HTML+CSS+JS frontend. Utilizes Kaggle dataset & GPU acceleration. Features Conv2D, Dense, LeakyReLU, Adam optimizer & Binary Crossentropy loss."
              ghLink="https://github.com/completelyblank/fashion_GANN"
              />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anime}
              isBlog={false}
              title="Anime MERN"
              description="A MERN Stack CRUD Website to introduce me to MERN Technologies."
              ghLink="https://github.com/completelyblank/Anime-MERN"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={handtrack}
              isBlog={false}
              title="HandTrack_Filter_Capture"
              description="Computer Vision Project using openCV to read webcam images frame by frame and apply filters through MediaPipe landmark signals."
              ghLink="https://github.com/completelyblank/handTrack_filter_capture"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blankshowcase}
              isBlog={false}
              title="Blank Showcase"
              description="Vanilla HTML CSS JS + Firebase (Cloud) project to showcase my Art Styles and what I have made over the years."
              demoLink="art-showcase-93cbc.web.app/"
              ghLink="art-showcase-93cbc.web.app/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={terra}
              isBlog={false}
              title="Terra Incognita (Halted)"
              description="Terra Incognita is a 2D dungeon crawler simulator where you navigate a mysterious world, battle foes, and collect treasure to reach level 100, utilizing ML, Python, and Pygame. (Halted)"
              ghLink="https://github.com/completelyblank/Terra-Incognita"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vulner}
              isBlog={false}
              title="Vulner (Basics)"
              description="Flask-based web application with features for data encryption, decryption, password cracking, and basic malware analysis. The application also includes logging for debugging purposes."
              ghLink="https://github.com/completelyblank/Vulner"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
