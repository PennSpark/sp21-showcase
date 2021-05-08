import React from "react"
import Layout from "../components/layout"
import Project from "../components/project"
import "semantic-ui-css/semantic.min.css"
import FadeIn from "react-fade-in"

import { Grid } from "semantic-ui-react"

import headerImg from "../../static/img/header.png"
import emojifierImg from "../../static/img/emojifier.png"
import clarifiImg from "../../static/img/clarifi.png"
import pogaImg from "../../static/img/poga.png"


export default function Home() {
  return (
    <Layout>
      <div
        style={{
          width: "100%",
          padding: "100px",
          textAlign: "center",
          backgroundImage: `url(${headerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <FadeIn>
          <h3 style={{ fontSize: "1.6rem" }}>Penn Creative Labs</h3>
          <h1 style={{ fontSize: "3rem" }}>Spring 2021 Showcase</h1>
        </FadeIn>
      </div>

      <Grid container columns={3} style={{ margin: "auto", marginTop: "30px" }}>
        <Grid.Column>
          <Project
            img={pogaImg}
            url="/"
            title="Poga"
            isCodingProject="True"
            isDesignProject="True"
            description="Interactive website that uses machine learning to detect and classify emotions within an image."
            people="Jimmy Ren, Isabel An, Janice Kim, Wendy Wu, Charles Cheng, Brandon Adiele, Tinatin Kokoshvili, Andrew Zhang"
          />
        </Grid.Column>
        <Grid.Column>
          <Project
            img={clarifiImg}
            url="/"
            title="Clarifi"
            isCodingProject="False"
            isDesignProject="True"
            description="Designed user interface for Clarifi, an app to help students with ADHD get work done by limiting distractions, rewarding students with points and levels, and providing planning tools."
            people="Elyssa Chou, Vivienne Chen, Kristine Lam"
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
    </Layout>
  )
}
