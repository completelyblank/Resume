import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong style={{ color: "#9f700c" }}>Code:</strong>
      </h1>
      <GitHubCalendar
        username="completelyblank"
        blockSize={15}
        blockMargin={5}
        color="#FFD700"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
