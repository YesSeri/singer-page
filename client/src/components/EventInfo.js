import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  margin: auto;
  background-color: #b73;
  border: 3px solid black;
  margin-bottom: 3px;
  width: 50%;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default function EventInfo({ concert: { name, prettyDate, info } }) {
  return (
    <Div>
      <h1>{name}</h1>
      <p>{prettyDate()}</p>
      <p>{info}</p>
    </Div>
  )
}