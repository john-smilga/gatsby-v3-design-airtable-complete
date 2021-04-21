import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Layout, Projects, Algolia } from '../components'

const ProjectsPage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
  } = data
  return (
    <Wrapper>
      <Layout>
        <Projects title="our projects" projects={projects} page />
        <Algolia />
      </Layout>
    </Wrapper>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      sort: { fields: data___date, order: DESC }
    ) {
      nodes {
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
              }
            }
          }
        }
        id
      }
    }
  }
`

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);
  nav {
    background: var(--clr-primary-7);
  }
`

export default ProjectsPage
