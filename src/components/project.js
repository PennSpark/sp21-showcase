import React from "react"
import { Card, Icon, Image } from "semantic-ui-react"
import LabelCoding from "./label-coding"
import LabelDesign from "./label-design"
import FadeIn from "react-fade-in"

export default class Project extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const isCodingProject = this.props.isCodingProject
    let codingLabel
    if (isCodingProject == "True") {
      codingLabel = <LabelCoding />
    } else {
      codingLabel = <div />
    }

    const isDesignProject = this.props.isDesignProject
    let designLabel
    if (isDesignProject == "True") {
      designLabel = <LabelDesign />
    } else {
      designLabel = <div />
    }

    return (
      <FadeIn>
        <a href={this.props.url}>
          <Card>
            <Image src={this.props.img} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{this.props.title}</Card.Header>
              <Card.Meta>
                {codingLabel}
                {designLabel}
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
      </FadeIn>
    )
  }
}
