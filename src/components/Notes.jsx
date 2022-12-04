import React from 'react'
import styled from 'styled-components'
import Note from './Note'

const Ul = styled.ul`
  display: flex;
  gap: .5rem;
`

const Notes = () => {

  return (
    <Ul>
      <Note/>
    </Ul>
  )
}

export default Notes