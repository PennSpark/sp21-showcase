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
import habitatImg from "../../static/img/habitat.png"
import arthubImg from "../../static/img/arthub.png"
import mysteryMuseumImg from "../../static/img/mystery-museum.png"
import mysteryMusicImg from "../../static/img/mystery-music.png"
import penntitionsImg from "../../static/img/penntitions.png"



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
            url="poga"
            title="Poga"
            isCodingProject="True"
            isDesignProject="True"
            description="A yoga-practicing app with a plant friend!"
            people="Jimmy Ren, Isabel An, Janice Kim, Wendy Wu, Charles Cheng, Brandon Adiele, Tinatin Kokoshvili, Andrew Zhang"
          />
        </Grid.Column>
        <Grid.Column>
          <Project
            img={clarifiImg}
            url="clarifi"
            title="Clarifi"
            isCodingProject="False"
            isDesignProject="True"
            description="Designed user interface for Clarifi, an app to help students with ADHD get work done by limiting distractions, rewarding students with points and levels, and providing planning tools."
            people="Elyssa Chou, Vivienne Chen, Kristine Lam"
          />
        </Grid.Column>
        <Grid.Column>
          <Project
            img={habitatImg}
            url="habitat"
            title="Habitat"
            isCodingProject="True"
            isDesignProject="True"
            description="Habitat is an iOS mobile app and a Penn-themed habit tracker."
            people="Maggie Yu, Logan Cho, Arushi Srivastava, Leon Hertzberg, Julia Deng, Xinyi Zheng"
          />
        </Grid.Column>
        <Grid.Column>
          <Project
            img={mysteryMuseumImg}
            url="mystery-at-museum"
            title="Mystery at Museum"
            isCodingProject="False"
            isDesignProject="True"
            description="This digital escape room is a design-only project created using Figma."
            people="Connie Lin, Elyssa Chou, Kristine Lam, Vivienne Chen"
          />
        </Grid.Column>
        <Grid.Column>
          <Project
            img={arthubImg}
            url="arthub"
            title="Arthub"
            isCodingProject="True"
            isDesignProject="True"
            description="A streamlined website where artists can upload their portfolios, order/complete commissions, and where recruiters can find and recruit talent."
            people="Norman Chen, Maggie Yu, Elaine Fan"
          />
        </Grid.Column>
        <Grid.Column>
          <Project
            img={mysteryMusicImg}
            url="mystery-music"
            title="Mystery Music"
            isCodingProject="True"
            isDesignProject="True"
            description="A four player game that tests how well you know your friends’ music tastes!"
            people="Linda Lu, David Zhang, Egret Jin, Lindsey Smith, Caroline Chin, Christy Qiu"
          />
        </Grid.Column>
        <Grid.Column>
          <Project
            img={penntitionsImg}
            url="penntitions"
            title="Penntitions"
            isCodingProject="True"
            isDesignProject="True"
            description="A petition website that allows Penn students to make an impact."
            people="Janna Goliff, Ahmed Laban, Helena Zhang, Aryan Nagariya, Janice Kim"
          />
        </Grid.Column>
        <Grid.Column>
          <Project
            img={emojifierImg}
            url="emojifier"
            title="Emojifier"
            isCodingProject="True"
            isDesignProject="False"
            description="Interactive website that uses machine learning to detect and classify emotions within an image."
            people="Grace Jiang, Jerry Qin, Aarushi Singh, Acelyn Choi, Aditya Gupta, Shelly Wu, Subin Kim"
          />
        </Grid.Column>
      </Grid>
    </Layout>
  )
}
