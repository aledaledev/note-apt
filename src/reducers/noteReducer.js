import {v4 as uuid} from 'uuid'

const initialNotes = [
  {
    content: "Play computer games",
    important: true,
    id: '12ear2a21e',
  },
  {
    content: "Play guitar",
    important: true,
    id: '214acaw5ar'
  },
  {
    content: "Play piano",
    important: false,
    id: '67sa2412xv'
  }
]

const initialState = {
  notes:initialNotes,
  filteredNotes:initialNotes
}

const noteReducer = (state = initialState, action) => {
  switch(action.type){
    case "CREATE_NOTE": {
      //state.push(action.payload) ojo no mutar
      //return state.concat(action.payload);
      return {...state, notes:[...state.notes, action.payload],filteredNotes:[...state.notes, action.payload] }
    }

    case "TOGGLE_IMPORTANT":{
      const {id} = action.payload

      const currentNotes = state.filteredNotes.map(note => {
          if(note.id === id) {
              return {
                  ...note,
                  important:!note.important
              }
          }
          return note
      }) 

      return {...state,notes:currentNotes ,filteredNotes:currentNotes}
    }

    case "DELETE_NOTE":{
      const {id} = action.payload
      const currentNotes = state.filteredNotes.filter(note => note.id !== id)
      return {...state, notes:currentNotes,filteredNotes:currentNotes}
    }

    case 'FILTER_ALL':{
      return {...state, filteredNotes:state.notes}
    }

    case "FILTER_IMPORTANT":{
      return {...state, filteredNotes:state.notes.filter(note => note.important)}
    }

    case 'FILTER_NO_IMPORTANT':{
      return {...state, filteredNotes:state.notes.filter(note => !note.important)}
    }

    default: return state
  }
};

//actionCreator
export const createNote = content => {
  return {
    type:'CREATE_NOTE',
    payload: {
      content,
      important: false,
      id: uuid()
    }
  }
}

export const deleteNote = id => {
  return {
    type:'DELETE_NOTE',
    payload: {
      id
    }
  }
}

export const toggleImportantNote = id => {
  return {
    type:'TOGGLE_IMPORTANT',
    payload: {
      id
    }
  }
}

export const filterAll = () => {
  return {
    type: 'FILTER_ALL'
  }
}

export const filterImportant = () => {
  return {
    type: 'FILTER_IMPORTANT'
  }
}

export const filterNoImportant = () => {
  return {
    type: 'FILTER_NO_IMPORTANT'
  }
}


export default noteReducer;
