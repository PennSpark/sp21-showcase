import React from "react"
import ProjectLayout from "../components/project-layout"
import "semantic-ui-css/semantic.min.css"
import FadeIn from "react-fade-in"

import emojifierImg from "../../static/img/emojifier.png"

export default function Home() {
  return (
    <ProjectLayout
      title="Emojifier"
      img={emojifierImg}
      color="#CBDAFF"
      projectUrl="https://github.com/PennCreativeLabs/sp21-emojifier"
      isCodingProject="True"
      people="Grace Jiang, Jerry Qin, Aarushi Singh, Acelyn Choi, Aditya Gupta, Shelly Wu, Subin Kim"
      background="Our project is a website that uses machine learning to classify the facial expressions in a photo into one of 4 emotions: happy, sad, neutral, or angry. We used Flask to create the web application portion and Tensorflow for the machine learning portion."
    ></ProjectLayout>
  )
}
