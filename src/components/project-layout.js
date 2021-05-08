import React from "react"
import FadeIn from "react-fade-in"
import { Container } from "semantic-ui-react"

import "./styles/project-layout.css"


export default class ProjectLayout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const isCodingProject = this.props.isCodingProject
    let codingLabel
    if (isCodingProject == "True") {
      codingLabel = "Source Code"
    } else {
      codingLabel = "Figma"
    }

    return (
      <html lang="en">
        <head>
          <title>{this.props.title} | PCL Showcase</title>
        </head>
        <body style={{ margin: "0px", padding: "0px" }}>
          <div
            style={{
              width: "100%",
              padding: "100px",
              textAlign: "center",
              backgroundColor: `${this.props.color}`,
              //   backgroundImage: `url(${this.props.img})`,
              //   backgroundSize: "cover",
              //   backgroundPosition: "center",
            }}
          >
            <FadeIn>
              <h1 style={{ fontSize: "3rem" }}>{this.props.title}</h1>
              <br />

              <p style={{ fontSize: "1.2rem" }}>{this.props.people}</p>
              <br />

              <h3>
                <a href="/" style={{ color: "black" }}>
                  &larr; Back Home
                </a>
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <a
                  href={this.props.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {codingLabel}
                </a>
              </h3>
            </FadeIn>
          </div>
          <Container style={{ paddingTop: "60px" }}>
              <div style={{maxWidth: "600px", margin: "auto"}}>
                  <FadeIn>
              <div>
                <h1>Background</h1>
                <p>{this.props.background}</p>
              </div>
            </FadeIn>
              </div>
            
          </Container>
        </body>
      </html>
    )
  }
}
