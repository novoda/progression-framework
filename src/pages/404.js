// @flow
import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import LowFundsAnimation from '../components/animations/lowFunds'
import {
  ErrorPageLink,
  ErrorPageHeader,
  ErrorPageDescription,
} from '../components/styles'
import '../css/main.min.css'

type Props = {
  data: Object,
}

export default class Frameworks extends React.Component<Props> {
  render() {
    return (
      <Layout data={this.props.data}>
        <div className="strip strip--middle cover cover-md--640">
          <div className="container">
            <div className="grid-row grid-row--middle grid-row--center">
              <div className="grid-col-12 grid-col-6-md">
                <ErrorPageHeader>404</ErrorPageHeader>
                <ErrorPageDescription className="u-color-grey">
                  Sorry, we can&rsquo;t find the page you&rsquo;re
                  looking&nbsp;for
                </ErrorPageDescription>
                <ErrorPageLink
                  to="/"
                  className="o-button-text u-margin-top-large-md"
                >
                  Go back home&nbsp;&rsaquo;
                </ErrorPageLink>
              </div>
              <div className="grid-col-12 grid-col-4-md">
                
              </div>
            </div>
          </div>
        </div>
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
