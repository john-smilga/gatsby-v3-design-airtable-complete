import React from 'react'
import styled from 'styled-components'

const Title = ({ title }) => {
  return (
    <Wrapper>
      <h2>
        <span>/</span> {title}
      </h2>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    span {
      font-size: 0.85em;
      color: var(--clr-primary-5);
      margin-right: 1rem;
      font-weight: 700;
    }
  }
`
export default Title
