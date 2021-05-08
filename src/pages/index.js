import React from "react"
import Layout from "../components/layout"
import Project from "../components/project"
import 'semantic-ui-css/semantic.min.css'

import { Grid } from 'semantic-ui-react'

import headerImg from '../../static/img/header.png';
import emojifierImg from '../../static/img/emojifier.png';


export default function Home() {
  return (<Layout>
      <div style={{width: "100%", padding: "100px", textAlign: "center", backgroundImage: `url(${headerImg})`, backgroundSize: "cover", backgroundPosition: "center"}}> 
        <h3 style={{fontSize: "1.6rem"}}>Penn Creative Labs</h3>
        <h1 style={{fontSize: "3rem"}}>
            Spring 2021 Showcase
        </h1>
      </div>

      <Grid container columns={3} style={{margin:"auto", marginTop: "30px"}}>
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
