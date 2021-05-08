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
      challenges={[
        "Our team faced several challenges during the machine learning portion of our project. Firstly, it was a challenge to bring up the accuracy of our machine learning classification accuracy rate, since our dataset’s resolution was too small (48x48). Secondly, overfitting was also an issue since our dataset was too small. We were able to partially solve this by randomly rotating and flipping images before training them, but it still affected the final accuracy.",
        <br />,
        <br />,
        "We also ran into several small issues that stalled our progress in development while working out the frontend of our application. Working with Flask for the first time was a challenge for us as we tried to figure out Flask-specific details to file structures such as where to place all our static files. Getting used to Git, integrating the web application with the machine learning portion, and working with OpenCV for the first time also posed a challenge for us. While trying to integrate the webcam OpenCV,  we ran into the problem of circular dependency between our files that we couldn’t quite wrap our head around. We ended up leaving out the webcam portion, but this is something we would like to figure out with more time.",
      ]}
      takeaways={[
        <strong>
          Full-Stack Developers (Acelyn Choi, Subin Kim, Shelly Wu)
        </strong>,
        ": Although we ran into many challenges with using Flask, it was a valuable learning experience, especially since all of us were unfamiliar with the framework. We were familiar with HTML and CSS, but using them with Flask was slightly different, which required us to dive deeper into how Flask works and learn more about it. We also learned the shortcut to a hard reload (Ctrl+Shift+R) that solved our problem of browser caching.",
        <br />,
        <br />,
        <strong>ML Developers (Aditya Gupta, Aarushi Singh)</strong>,
        ": We learned that machine learning isn’t too hard to set up but is very hard to master - there were a lot of parameters and each one had an effect on the final accuracy. The structure of the model, the number of classes used, the quality of the dataset, and the time taken to train were all factors that we had to consider in training the model.",
      ]}
      lookingForward={[
        "Looking forward, there are several improvements we could make to our project:",
        <br />,
        <br />,
        "Firstly, our final accuracy could have been improved by training on a larger dataset next time. Additionally, we could look into working with with distributed big data frameworks such as Spark. Finally, we could integrate Amazon s3 and cloud storage to handle larger datasets to work with.",
      ]}
    ></ProjectLayout>
  )
}
