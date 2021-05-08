import React from "react"
import ProjectLayout from "../components/project-layout"
import "semantic-ui-css/semantic.min.css"

import arthubImg from "../../static/img/arthub-header.png"

export default function Home() {
  return (
    <ProjectLayout
      title="ArtHub"
      img={arthubImg}
      projectUrl="https://github.com/PennCreativeLabs/sp21-arthub"
      isCodingProject="True"
      people="Norman Chen, Maggie Yu, Elaine Fan"
      blurb="A streamlined website where artists can upload their portfolios, order/complete commissions, and where recruiters can find and recruit talent."
      background={[
          <ul>
              <li>Portfolio-building and social platform where users can upload their art and provide commissions, and where recruiters go to find and recruit talent.</li>
              <li>Aimed towards student artists, recruiters, and consumers looking for affordable and personalized artwork.</li>
              <li>Web application built with NodeJS, ExpressJS, handlebars (frontend) and MongoDB (backend):
                  <ul>
                      <li>Handlebars used for HTML formatting.</li>
                    <li>Multer (Node.JS middleware) used to support multiple image processing.</li>
                    <li>MongoDB schemas for images, info, and account info.</li>
                  </ul>
              </li>
          </ul>
      ]}
      timeline={[
        "Our project had three major milestones, detailed below:",
        <br />,
        <br />,
        <strong>Milestone 1</strong>,
        <ul>
          <li>
            Have a wireframe of the pages and basic features, as well as a list of frontend/backend programs necessary to build the project (MERN stack + user security?)</li>
        </ul>,
        <strong>Milestone 2</strong>,
        <ul>
          <li>
            Creating a MVP that supports image uploads and a login screen.
          </li>
          <li>
            Finalizing logo design and implementing onto application.
          </li>
        </ul>,
        <strong>Final Milestone</strong>,
        <ul>
          <li>Finalizing specific functions (i.e. adding descriptions, names, supporting different file types).</li>
          <li>Finalizing frontend design.</li>
        </ul>,
      ]}
      challenges={[
          <ul>
              <li>Smaller team = more work and knowledge required per team member</li>
              <li>Picking up new frontend and backend languages (Handlebars, Multer, MongoDB)</li>
              <li>Working with busy schedules (midterms and finals)</li>
          </ul>
      ]}
      takeaways={[
        <ul>
          <li>Teamwork is dream work!</li>
          <li>
            Setting ambitious goals are okay but it is important to pivot and
            think realistically given different circumstances.
          </li>
          <li>Learning new languages from scratch can be very challenging but rewarding.</li>
          <li>It’s important to take breaks and check in with your team members outside of work.</li>
        </ul>,
      ]}
      lookingForward={[
        "Looking forward, we could continue to expand our project by:",
        <ul>
            <li>Improving features and and the UI.</li>
            <li>Implementing more concepts learned in class and workshops.</li>
            <li>Testing the app with real students and deploying the application to the public.</li>
        </ul>
      ]}
    ></ProjectLayout>
  )
}
