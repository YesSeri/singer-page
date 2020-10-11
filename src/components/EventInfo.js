import React from 'react'

export default function EventInfo(props) {
  console.log(props)
  return (
    <>
      <h1>{props.concert.name}</h1>
      <p>{props.concert.prettyDate()}</p>
      <p>{props.concert.info}</p>
    </>
  )
}