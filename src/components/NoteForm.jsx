import React from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../reducers/noteReducer'

const NoteForm = () => {

  const dispatch = useDispatch()  

  const addNote = (e) => {
    e.preventDefault()
    const {note} = e.target
    e.target.value = ''
    dispatch(createNote(note.value))
  }

  return (
    <div>
    <form onSubmit={addNote} >
      <input type="text" name='note'/>
      <button>create</button>
    </form>
  </div>
  )
} 

export default NoteForm