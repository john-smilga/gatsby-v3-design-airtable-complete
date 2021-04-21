import React, { useEffect, useState } from 'react'
import Title from './Title'
import styled from 'styled-components'
import base from './Airtable'
import { FaVoteYea } from 'react-icons/fa'

const Survey = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const getRecords = async () => {
    const records = await base('Survey')
      .select({})
      .firstPage()
      .catch(err => console.log(err))
    const newItems = records.map(record => {
      const { id, fields } = record
      return { id, fields }
    })
    setItems(newItems)
    setLoading(false)
  }

  const giveVote = async id => {
    setLoading(true)
    const tempItems = [...items].map(item => {
      if (item.id === id) {
        let { id, fields } = item
        fields = { ...fields, votes: fields.votes + 1 }
        return { id, fields }
      } else {
        return item
      }
    })

    const records = await base('Survey')
      .update(tempItems)
      .catch(err => console.log(err))
    const newItems = records.map(record => {
      const { id, fields } = record
      return { id, fields }
    })
    setItems(newItems)
    setLoading(false)
  }

  useEffect(() => {
    getRecords()
  }, [])

  return (
    <Wrapper className="section">
      <div className="container">
        <Title title="survey"></Title>
        <h3>most important room in the house?</h3>

        <ul>
          {items.map(item => {
            const {
              id,
              fields: { name, votes },
            } = item
            return (
              <li key={id}>
                <div className="key">{name.toUpperCase().substring(0, 2)}</div>
                <div>
                  <h4>{name}</h4>
                  <p>{votes} votes</p>
                </div>
                <button
                  disabled={loading ? true : false}
                  onClick={() => giveVote(id)}
                >
                  <FaVoteYea />
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .container {
    width: 90vw;
    max-width: var(--max-width);

    margin: 0 auto;
    h3 {
      text-align: center;
      color: var(--clr-grey-5);
      margin-bottom: 4rem;
    }
    ul {
      margin-top: 2rem;
      display: grid;
      gap: 2rem;
      grid-gap: 2rem;
      @media (min-width: 992px) {
        & {
          grid-template-columns: 1fr 1fr;
        }
      }
      @media (min-width: 1200px) {
        & {
          grid-template-columns: 1fr 1fr 1fr;
        }
      }
    }
    li {
      background: var(--clr-grey-10);
      border-radius: var(--radius);
      padding: 0.75rem 1rem;
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 0 3rem;
      grid-gap: 0 3rem;
      align-items: center;
      .key {
        color: var(--clr-white);
        font-size: 1.5rem;
        background: var(--clr-primary-7);
        padding: 0.5rem 1rem;
        border-radius: var(--radius);
      }
      p {
        margin-bottom: 0;
        color: var(--clr-grey-5);
        letter-spacing: var(--spacing);
      }
      h4 {
        margin-bottom: 0;
      }
      button {
        background: transparent;
        border-color: transparent;
        font-size: 2rem;
        cursor: pointer;
        color: var(--clr-black);
      }
      button:disabled {
        color: var(--clr-grey-6);
        cursor: not-allowed;
      }
    }
  }
`
export default Survey
