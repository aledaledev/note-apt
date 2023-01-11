import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {editNote, updateNote} from '../reducers/noteReducer'

const EditNote = () => {

  const notes = useSelector(state => state.notes)
  const currentNote = notes.filteredNotes.find(({id}) =>  id===notes.editNoteId)
  const [updateContent, setUpdateContent] = useState(currentNote.content)
  const dispatch = useDispatch()

  const handleSumbit = (e) => {
    e.preventDefault()
    const note = {content:updateContent, id:notes.editNoteId}
    dispatch(updateNote(note))
    dispatch(editNote(''))
  }

  return (
    <>
    <form onSubmit={handleSumbit}>
        <input type="text" value={updateContent} onChange={(e) => setUpdateContent(e.target.value)}/>
        <button type='submit'>update</button>
        <button type='button' onClick={() => dispatch(editNote(''))}>calcel</button>
    </form>
    </>
  )
}

export default EditNote