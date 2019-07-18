// @flow
import * as React from 'react'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Layout from '../components/layout'
import {
  Subtitle,
  Title,
  DescriptionView,
  Description,
  DescriptionText,
  DescriptionTitleGroup,
} from '../components/styles'
import '../css/main.min.css'

type Props = {
  data: Object,
}

export default class Index extends React.Component<Props> {
  render() {
    return (
      <Layout data={this.props.data}>
        <DescriptionView>
          <DescriptionTitleGroup>
            <Subtitle>Welcome To</Subtitle>
            <Title>Progression at Novoda 🎉</Title>
          </DescriptionTitleGroup>
          <Description>
            <Subtitle>Purpose</Subtitle>
            <DescriptionText>
               The purpose of this framework is to empower everyone at Novoda to take ownership of their career and growth. The framework can be used as a tool to hone your skills and understand which competencies you need to reach your goals and aspirations. We hope this will accelerate your journey in reaching your full potential. 
            </DescriptionText>
            <DescriptionText>
               We want to provide clarity and transparency around growth and development opportunities and enable people to build on their strengths. Our career progression path is in place to help you visualise your future success, and to encourage everyone to challenge and be challenged in a constructive and supportive environment. 
            </DescriptionText>
            <DescriptionText>
               We want your journey at Novoda to not just be a job. We want to support you in pursuing a career that challenges you and helps you grow no matter what your starting point is. While we hope that you will learn a huge amount in your time at Novoda, we also want to create an environment where you can form friendships, have fun and be inspired.
            </DescriptionText>
            <DescriptionText>
               We know that everyone has unique ideas, strengths and perspectives to bring to the table, and we value everyone’s uniqueness. Our career progression framework and personal journey plan will ensure that you get to where you want to be. 
            </DescriptionText>
            <DescriptionText>
               Do you ever ask yourself:
            </DescriptionText>
            <DescriptionText>
               Where is Atlantis located? <br/>
               How far can a cat fall without injury? <br/>
               How much time of their life does the average person spend waiting at a traffic light?<br/> 
               How might we create a career development path for everyone at Novoda that is engaging, challenging and fun? <br/>
            </DescriptionText>
            <DescriptionText>
               At Novoda, we value curiosity, are passionate about sharing knowledge and strive to find out more about the world we live in every day. The first step to learning is asking questions. Our career progression framework contains recommended reading and stretch assignments for each role, so you can learn something new and step out of your comfort zone.
            </DescriptionText>
          </Description>
        </DescriptionView>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            sidebarTitle
            sidebarGroup
          }
        }
      }
    }
  }
`
