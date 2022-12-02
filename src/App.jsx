import React from 'react'
import ReactDOM from 'react-dom'
import {legacy_createStore as createStore} from 'redux'
import noteReducer, { createNote, deleteNote, toggleImportantNote } from './store/noteReducer'
import styled from 'styled-components'

export const store = createStore(noteReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.dispatch({
  type:'CREATE_NOTE',
  payload: {
    content:'Play computer games',
    important: true,
    id:1
  }
})

store.dispatch({
  type:'CREATE_NOTE',
  payload: {
    content:'Cook',
    important: false,
    id:2
  }
})

const Li = styled.li`
  padding: 1rem;
  border: 1px solid #eee;
  list-style: none;
`

const Ul = styled.ul`
  display: flex;
  gap: .5rem;
`

function App() {
  const state = store.getState()

  const toggleImportant = (id) => {
    store.dispatch(toggleImportantNote(id))
  }

  const handleDelete = (id) => {
    store.dispatch(deleteNote(id))
  }

  const addNote = (e) => {
    e.preventDefault()
    const {note} = e.target
    e.target.value = ''
    store.dispatch(createNote(note.value))
  }

  return (
    <div className="App">
      <div>
        <form onSubmit={addNote} >
          <input type="text" name='note'/>
          <button>create</button>
        </form>
      </div>
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
    </div>
  )
}

export default App