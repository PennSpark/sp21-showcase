import React from "react"
import { Card, Icon, Image } from "semantic-ui-react"
import LabelTag from "../components/label"

import "./styles/project.css"

export default class Project extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <a href={this.props.url}>
        <Card>
          <Image src={this.props.img} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{this.props.title}</Card.Header>
            <Card.Meta>
              <LabelTag />
              {/* <span className="date">Joined in 2015</span> */}
            </Card.Meta>
            <Card.Description>{this.props.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="users" />
            {this.props.people}
          </Card.Content>
        </Card>
      </a>
    )
  }
}
