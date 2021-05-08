import React from "react"
import ProjectLayout from "../components/project-layout"
import "semantic-ui-css/semantic.min.css"

import pogaImg from "../../static/img/poga-header.png"

export default function Home() {
  return (
    <ProjectLayout
      title="Poga"
      img={pogaImg}
      projectUrl="https://github.com/PennCreativeLabs/sp21-poga"
      isCodingProject="True"
      people="Jimmy Ren, Isabel An, Janice Kim, Wendy Wu, Charles Cheng, Brandon Adiele, Tinatin Kokoshvili, Andrew Zhang"
      background="Want to start off your day right? Start it off by spending time with your plant-friend doing a yoga or meditation session, which will log your time and movements to give you the power to grow your plant-friend and you alongside it! Our AI-powered website will be able to monitor your progression through yoga workouts while you accumulate points and share your progress with friends."
      timeline={[
        <strong>Milestone 1</strong>,
        <ul>
          <li>
            Layout the foundations of the website and project and readjust any
            features accordingly.
          </li>
          <li>
            Have a rough outline of the website with basic features already
            created
          </li>
        </ul>,
        <strong>Milestone 2</strong>,
        <ul>
          <li>
            Finish the working TensorFlow.js application that will able to
            differentiate between poses
          </li>
          <li>
            Finish the basic functionality of the web pages and begin working on
            the appearances
          </li>
        </ul>,
      ]}
      challenges={[
        <ul>
          <li>Generating the data from pose estimation</li>
          <li>Creating the CNN model</li>
          <li>Working on firebase connection</li>
        </ul>,
      ]}
      takeaways={[
        <ul>
          <li>Integrating the machine learning into our website</li>
          <li>Firebase was a little difficult to integrate into the site</li>
        </ul>,
      ]}
      lookingForward={[
        "Looking forward, we could continue to expand our project by:",
        <ul>
          <li>
            Adding more social media features (sharing onto facebook, instagram,
            etc)
          </li>
          <li>Adding friends</li>
          <li>Favoriting exercises and adding more yoga poses</li>
        </ul>,
      ]}
    ></ProjectLayout>
  )
}
