import React from "react"
import ProjectLayout from "../components/project-layout"
import "semantic-ui-css/semantic.min.css"

import habitatImg from "../../static/img/habitat-header.png"

export default function Home() {
  return (
    <ProjectLayout
      title="Habitat"
      img={habitatImg}
      projectUrl="https://github.com/PennCreativeLabs/sp21-habitat"
      isCodingProject="True"
      blurb="Habitat is an iOS mobile app and a Penn-themed habit tracker."
      people="Maggie Yu, Logan Cho, Arushi Srivastava, Leon Hertzberg, Julia Deng, Xinyi Zheng"
      background={[
        <p>
          Level up your Penn squirrel by completing habits! Penn Habitat is a
          productivity app that can help you manage tasks and set up your day.
          By completing tasks, you can customize your character and see your
          squirrel evolve into the quintessential Penn student.
        </p>,
      ]}
      timeline={[
        <strong>Milestone 1</strong>,
        <ul>
          <li>Present a rough sketch of the habit tracker’s main window.</li>
        </ul>,
        <strong>Milestone 2</strong>,
        <ul>
          <li>
            Implement add/delete features to the habit trackers, create
            background theme.
          </li>
        </ul>,
      ]}
      challenges={[
        <ul>
          <li>Having all developers set up Firebase properly</li>
          <li>Attendance and engagement in meetings in a virtual setting</li>
        </ul>,
      ]}
      takeaways={[
        <ul>
          <li>Learned a lot about the basics of iOS Development</li>
          <li>Worked with Firebase and SwiftUI</li>
          <li>
            "It was great learning in and working with Figma! Also, it was very
            cool seeing my designs come to life" - Julia Deng
          </li>
          <li>
            “I put myself in the designer mindset for the first time and it was
            a lot of fun!” - Karen Zheng
          </li>
          <li>
            "Learning Swift for the first time and working as a team was
            awesome! Learned some really useful stuff while surrounded by great
            people!” - Leon Hertzberg
          </li>
        </ul>,
      ]}
      lookingForward={[
        "Looking forward, we could continue to expand our project by:",
        <ul>
          <li>Adding more features to habits, such as repeating a habit.</li>
        </ul>,
      ]}
    ></ProjectLayout>
  )
}
