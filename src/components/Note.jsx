import React from 'react'
import styled from 'styled-components'
import { deleteNote, toggleImportantNote } from '../reducers/noteReducer'
import { useDispatch, useSelector } from 'react-redux'

const Li = styled.li`
  padding: 1rem;
  border: 1px solid #eee;
  list-style: none;
`

const Note = () => {

  //seleccionar una parte del estado(que es un objeto)
  const state = useSelector(state => state.notes)
  const dispatch = useDispatch()

  const toggleImportant = (id) => {
    dispatch(toggleImportantNote(id))
  }

  const handleDelete = (id) => {
    dispatch(deleteNote(id))
  }

  return (
    state.map(({content,important,id}) => 
    <Li key={id}>
      <h3>{content}</h3>
      <p>{important?'important':'not important'}</p>
      <button onClick={() => toggleImportant(id)}>change importance</button>
      <button onClick={() => handleDelete(id)}>delete</button>
    </Li>
    )
  )
}

export default Note