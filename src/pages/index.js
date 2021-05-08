import React from "react"
import Layout from "../components/layout"
import Project from "../components/project"
import 'semantic-ui-css/semantic.min.css'

import { Grid } from 'semantic-ui-react'
import emojifierImg from '../../static/img/Emojifier.png';



export default function Home() {
  return (<Layout>
      <Grid container columns={3}>
        <Grid.Column>
        <Project
            img={emojifierImg}
            url="emojifier"
            title="Emojifier"
            isCodingProject="True"
            isDesignProject="False"
            description="project description 1"
            people="Grace Jiang, Jerry Qin, Aarushi Singh, Acelyn Choi, Aditya Gupta, Shelly Wu, Subin Kim"
        />
        </Grid.Column>
        <Grid.Column>
        <Project
            img={emojifierImg}
            url="emojifier"
            title="Emojifier"
            isCodingProject="True"
            isDesignProject="False"
            description="project description 1"
            people="Grace Jiang, Jerry Qin, Aarushi Singh, Acelyn Choi, Aditya Gupta, Shelly Wu, Subin Kim"
        />
        </Grid.Column>
        <Grid.Column>
        <Project
            img={emojifierImg}
            url="emojifier"
            title="Emojifier"
            isCodingProject="True"
            isDesignProject="False"
            description="project description 1"
            people="Grace Jiang, Jerry Qin, Aarushi Singh, Acelyn Choi, Aditya Gupta, Shelly Wu, Subin Kim"
        />
        </Grid.Column>
    </Grid>
      
  </Layout>)
}
