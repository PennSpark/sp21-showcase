import React from "react"
import Layout from "../components/layout"
import Involvement from "../components/project"

export default function Home() {
  return (<Layout>
      <h1>hi :)</h1>
      <Involvement
        title="Title :)"
        description="project description 1"
        link="yeet"
      />
  </Layout>)
}
