import React from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../reducers/noteReducer'

const NoteForm = () => {

  const dispatch = useDispatch()  

  const addNote = async (e) => {
    e.preventDefault()
    const {note} = e.target
    const content = note.value
    note.value = ''

    dispatch(createNote(content))
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