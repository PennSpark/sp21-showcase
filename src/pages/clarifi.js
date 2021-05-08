import React from "react"
import ProjectLayout from "../components/project-layout"
import "semantic-ui-css/semantic.min.css"
import FadeIn from "react-fade-in"

import clarifiImg from "../../static/img/clarifi-header.png"

export default function Home() {
  return (
    <ProjectLayout
      title="Clarifi"
      img={clarifiImg}
      projectUrl="https://www.figma.com/proto/WVF5dwYCrRR9PytPgTsizr/Clarifi-Mockup?node-id=171%3A1470&scaling=scale-down&page-id=129%3A332"
      isCodingProject="False"
      people="Elyssa Chou, Vivienne Chen, Kristine Lam"
      background="We helped design for Clarifi, a startup creating an app to help students with ADHD get work done. We worked with their team to create a style guide for their product. Starting with a wireframe and eventually leading to an interactive prototype in FIGMA, we then designed a new user interface that streamlines their current product. Along the way, we checked in with their team frequently and got feedback from students piloting the product. We also helped develop preliminary logo designs and graphics which will continue to be developed in the future."
      timeline={[
        "Our project had three major milestones, detailed below:",
        <br />,
        <br />,
        <strong>Milestone 1</strong>,
        ": Wireframe and style inspiration.",
        <strong>Milestone 2</strong>,
        ": Style guide and hi-fidelity mock-up.",
        <strong>Final Milestone</strong>,
        ": Interactive prototype",
      ]}
      challenges={[
          <ul>
              <li>Adapting to a pixelated style of design</li>
              <li>Understanding the target audience of Clarifi as a non-adhd individual</li>
              <li>It took us a bit of time to figure out how to make the interactive prototype in FIGMA</li>
          </ul>
      ]}
      takeaways={[
        <ul>
          <li>Becoming more confident in our own work!</li>
          <li>
            Having many iterations of wireframes and being set on one before
            moving to higher fidelity mockups (and generally not rushing earlier
            stages of the design process)
          </li>
          <li>
            Creating components in FIGMA from the start. Building screens with
            later interactivity in mind.
          </li>
        </ul>,
      ]}
      lookingForward={[
        "Looking forward, we could continue to expand our project by:",
        <ul>
            <li>Continuing to create graphics (avatars, achievements, etc.)</li>
            <li>Expanding user interface as the product changes</li>
            <li>Logo design</li>
        </ul>
      ]}
    ></ProjectLayout>
  )
}
