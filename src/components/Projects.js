import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/REASVA.jpg";
import projImg2 from "../assets/img/EventsforU.png";
import projImg3 from "../assets/img/FitHUB.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "REASVA",
      description: "An accident detection and response system",
      imgUrl: projImg1,
    },
    {
      title: "EventsForU",
      description: "An events management platform",
      imgUrl: projImg2,
    },
    {
      title: "Fithub",
      description: "Your one stop fitness app",
      imgUrl: projImg3,
    },
    ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>A showcase of innovative solutions blending software development and engineering. From mobile applications to IoT systems, each project reflects my passion for problem-solving, efficiency, and user-centric design."</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Each project represents a step forward in my journey as a developer, tackling real-world challenges with innovative and efficient solutions. Whether building interactive mobile applications, designing IoT-driven systems, or optimizing backend architectures, I focus on scalability, performance, and user experience. My work spans various technologies, from JavaScript and React Native to Node.js, Express, and Firebase, ensuring seamless functionality across platforms.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Explore my projects to see how I integrate problem-solving, creativity, and technical expertise to create impactful solutions..</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
