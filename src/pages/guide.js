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

export default class Guide extends React.Component<Props> {
  render() {
    return (
      <Layout data={this.props.data}>
        <DescriptionView>
          <DescriptionTitleGroup>
            <Subtitle>Welcome To</Subtitle>
            <Title>The Guide 🎉</Title>
          </DescriptionTitleGroup>
          <Description>
            <Subtitle>Guide</Subtitle>
            <DescriptionText>
               <b>How to use </b>
            </DescriptionText>
            <DescriptionText>
               <b>The framework </b>
            </DescriptionText>
            <DescriptionText>
               This framework describes the skills and competencies required for each role. The themes of this center around consulting, delivery, communication and collaboration, Novoda and experience. 
            </DescriptionText>
            <DescriptionText>
               We want you to progress as fast as possible. We don’t measure progression in years of experience but instead pay attention to what you can and want to do. Growth doesn’t just happen when you get a promotion, but also takes place gradually over days, weeks and months. We have therefore also included a progress scale within each role (levels 1,2 and 3) that offers stretch assignments, recommended reading and additional competencies. 
            </DescriptionText>
            <DescriptionText>
               When you first step into a role, you will likely be at level 1. Once you have spent some time at this level and completed a stretch assignment, you may have a go at attempting level 2. By the time you reach level 3, you may well be ready to start preparing yourself to progress to the next role. 
            </DescriptionText>
            <DescriptionText>
               <b>Objective setting</b>
            </DescriptionText>
            <DescriptionText>
               Working towards a big goal works best by breaking it down into manageable steps and tasks. These tasks are best defined through the use of objectives. If you’re in need of inspiration for your objectives, you can refer to this career progression framework. It offers plenty of ideas and opportunities to define your next steps. 
            </DescriptionText>
            <DescriptionText>
              We recommend picking 5 to 7 SMART objectives (specific, measurable, achievable, realistic and time bound). 
            </DescriptionText>
            <DescriptionText>
              Your career manager will be able to help you with this - ideally, your objectives should be based on your personal aspirations and help Novoda grow as a business. 
            </DescriptionText>
            <DescriptionText>
              <b>Personal journey planning</b>
            </DescriptionText>
            <DescriptionText>
              Once you’ve set your objectives you will probably ask yourself another question - ‘How do I achieve this?’. Your personal journey plan will help you with this. Together with your career manager, you will be able to define what steps you will need to take to achieve your goal, what resources or support you will need and how you will define success. 
            </DescriptionText>
            <DescriptionText>
              This plan will be tailored to you and will help you continuously reflect on your development and help you optimise your strengths. 
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
