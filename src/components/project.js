import React from "react"

import "./styles/project.css"

export default class Project extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="project">
        <div>
          <img src={this.props.img} />
        </div>
        <h3>
          <span>{this.props.title} </span>
        </h3>
        <p>{this.props.description}</p>
        <p>
          <a href={this.props.link}>Learn More &rarr;</a>
        </p>
      </div>
    )
  }
}
