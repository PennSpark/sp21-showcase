import React from "react"
import ProjectLayout from "../components/project-layout"
import "semantic-ui-css/semantic.min.css"

import penntitionsImg from "../../static/img/penntitions-header.png"

export default function Home() {
  return (
    <ProjectLayout
      title="Penntitions"
      img={penntitionsImg}
      projectUrl="https://github.com/PennCreativeLabs/sp21-penntitions"
      isCodingProject="True"
      blurb="A petition website that allows Penn students to make an impact."
      people="Janna Goliff, Ahmed Laban, Helena Zhang, Aryan Nagariya, Janice Kim"
      background={[
        <p>
          Last semester, Math 104 students tried to petition for more course
          resources. Their petition was held on change.org and garnered over 500
          signatures. However, it was rejected by the Penn Administration, which
          stated that petitions from third-party websites are prone to be signed
          by non-Penn students. To address this issue, we created Penntitions, a
          website in which only Penn students can access. In it, students can
          start, sign, and share petitions. This will allow them to make their
          voices heard and to push for greater changes.
        </p>,
      ]}
      timeline={[
        <strong>Milestone 1</strong>,
        <ul>
          <li>Design the website.</li>
        </ul>,
        <strong>Milestone 2</strong>,
        <ul>
          <li>Program website logic/functionality.</li>
        </ul>,
        <strong>Final Milestone</strong>,
        <ul>
          <li>Finalized website and minor details.</li>
        </ul>,
      ]}
      challenges={[
        <ul>
          <li>
            Technical difficulties - when we tried to run and test the project,
            nothing would show up. The entire team looked up and tried different
            solutions and we solved this problem together.
          </li>
          <li>
            Coordinating with Penn Administration to get access to PennInTouch
            and PennKey APIs.
          </li>
        </ul>,
      ]}
      takeaways={[
        <ul>
          <li>
            Development process of a web application - since most members do not
            have any web dev experience, this was a good and meaningful
            introduction to web application development, starting from the
            development process, version control with Github, and learning how
            to use React, Tailwind, etc.
          </li>
          <li>
            Version control with Github -- Merge, Creating branches, moving
            branches
          </li>
          <li>React</li>
          <li>NPM </li>
          <li>Tailwind</li>
          <li>Figma</li>
        </ul>,
      ]}
      lookingForward={[
        "Looking forward, we could continue to expand our project by:",
        <ul>
          <li>Ading files and images when creating a petition page.</li>
          <li>Add location for petitions.</li>
          <li>Filter and recommend petitions based on school and major.</li>
        </ul>,
      ]}
    ></ProjectLayout>
  )
}
