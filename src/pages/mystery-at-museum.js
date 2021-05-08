import React from "react"
import ProjectLayout from "../components/project-layout"
import "semantic-ui-css/semantic.min.css"

import mysteryMuseumImg from "../../static/img/mystery-museum-header.png"

export default function Home() {
  return (
    <ProjectLayout
      title="Mystery at Museum"
      img={mysteryMuseumImg}
      projectUrl="https://www.figma.com/file/nj4SVpqmJ6IHxxVVgnLtUe/Art-Heist-Escape-Room?node-id=0%3A1"
      isCodingProject="False"
      blurb="This digital escape room is a design-only project created using Figma."
      people="Connie Lin, Elyssa Chou, Kristine Lam, Vivienne Chen"
      background={[
        <p>
          We made the “rooms” using frames and added assets by manipulating the shape tool. We then created a narrative that utilized objects in our rooms. We used Notion links embedded in the rooms throughout the process as a “clues” page that guides the players. There were a series of 3 clues pages that led to three “challenges” the player had to solve in order to escape the room.
        </p>,
      ]}
      timeline={[
        <strong>Milestone 1</strong>, ": Thinking up of our own narrative for the escape room and visualizing what each room would look like after playing an existing online one for inspiration",
        <strong>Milestone 2</strong>, ": Thinking up of our own narrative for the escape room and visualizing what each room would look like after playing an existing online one for inspiration",
        <strong>Final Milestone</strong>, ": Straightening out the logic of the game flow",
      ]}
      challenges={[
        <ul>
          <li>
          Figuring how to organize frames and components when working with multiple elements
          </li>
          <li>
          Coming up with the strategy for the game flow (ex: structuring it to prevent player from being able to skip across challenges before first solving previous challenge)
          </li>
        </ul>,
      ]}
      takeaways={[
        <ul>
          <li>
          As a beginner with Figma, the project made me more comfortable with using different features in Figma such as grouping components
          </li>
        </ul>,
      ]}
      lookingForward={[
        "Looking forward, we could continue to expand our project by:",
        <ul>
          <li>Adding more complexity to challenges.</li>
          <li>Applying the swap instances Figma feature to do things like open/close objects.</li>
        </ul>,
      ]}
    ></ProjectLayout>
  )
}
