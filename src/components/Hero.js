import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
const Hero = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../images/mainBcg.png"
        layout="fullWidth"
        placeholder="tracedSVG"
        className="img"
        alt="color palette"
      />
      <div className="info">
        <article>
          <h3>If you can dream it, we can create it</h3>
          <h1>let your home be inique and stylish</h1>
          <Link to="/projects">Projects</Link>
        </article>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100vh;
  margin-top: -5rem;
  position: relative;
  .img {
    height: 100%;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  }
  article {
    width: 85vw;
    max-width: 800px;
    color: var(--clr-white);
    text-align: center;
    h1 {
      text-transform: uppercase;
      font-weight: 500;
      line-height: 1.25;
      margin: 2rem 0 3rem 0;
      letter-spacing: 3px;
    }
    h3 {
      font-weight: 400;
      font-family: 'Caveat', cursive;
    }
    a {
      background: transparent;
      border: 2px solid var(--clr-white);
      padding: 0.25rem 1rem;
      text-transform: capitalize;
      letter-spacing: 5px;
      color: var(--clr-white);
      font-size: 1rem;
      cursor: pointer;
      transition: var(--transition);
    }
    a:hover {
      background: var(--clr-white);
      color: var(--clr-black);
    }
    @media (min-width: 800px) {
      /* padding: 0 1rem; */
      a {
        font-size: 1.25rem;
        padding: 0.5rem 1.25rem;
      }
      h1 {
        letter-spacing: 5px;
      }
    }
  }
`

export default Hero
