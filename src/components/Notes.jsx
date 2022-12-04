import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { deleteNote, toggleImportantNote } from '../store/noteReducer'

const Li = styled.li`
  padding: 1rem;
  border: 1px solid #eee;
  list-style: none;
`

const Ul = styled.ul`
  display: flex;
  gap: .5rem;
`

const Notes = () => {

  //seleccionar una parte del estado
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  const toggleImportant = (id) => {
    dispatch(toggleImportantNote(id))
  }

  const handleDelete = (id) => {
    dispatch(deleteNote(id))
  }

  return (
    <Ul>
    {state.map(({content,important,id}) => 
      <Li key={id}>
        <h3>{content}</h3>
        <p>{important?'important':'not important'}</p>
        <button onClick={() => toggleImportant(id)}>change importance</button>
        <button onClick={() => handleDelete(id)}>delete</button>
      </Li>
    )}
    </Ul>
  )
}

export default Notes