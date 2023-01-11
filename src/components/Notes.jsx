import React from 'react'
import styled from 'styled-components'
import { deleteNote, toggleImportantNote } from '../reducers/noteReducer'
import { useDispatch, useSelector } from 'react-redux'

const Li = styled.li`
  padding: 1rem;
  border: 1px solid #eee;
  list-style: none;
`

const Ul = styled.ul`
  display: flex;
  gap: .5rem;
`


const Note = () => {

  //seleccionar una parte del estado(que es un objeto)
  const notes = useSelector(state => state.notes)
  const dispatch = useDispatch()

  return (

    <Ul>

    {notes.filteredNotes.map(({content,important,id}) => 
      <Li key={id}>
        <h3>{content}</h3>
        <p>{important?'important':'not important'}</p>
        <button onClick={() => dispatch(toggleImportantNote(id))}>change importance</button>
        <button onClick={() => dispatch(deleteNote(id))}>delete</button>
      </Li>)}

    </Ul>    
  )
}

export default Note