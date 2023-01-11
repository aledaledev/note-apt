import {v4 as uuid} from 'uuid'
import { changeImportance, createNewNote, deleteFromServer, getNotes, updateServerNote } from '../service/notes';

/*const initialNotes = [
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
]*/

const initialState = {
  notes:[],
  filteredNotes:[],
  editNoteId:''
}

const noteReducer = (state = initialState, action) => {
  switch(action.type){

    case "INIT_NOTES":{
      return {...state, notes:action.payload,filteredNotes:action.payload}
    }

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

    case "EDIT_NOTE":{
      const {id} = action.payload
      return {...state, editNoteId: id}
    }

    case 'UPDATE_NOTE':{
      const {id,content} = action.payload.note
      const index = state.filteredNotes.findIndex((note) => note.id === id)
      const updateMap = [...state.filteredNotes]
      updateMap[index] = {...updateMap[index], content}
      return {...state, filteredNotes:updateMap}
    }

    default: return state
  }
};

//actionCreator

//debe ser lo mas agnostico posible de donde se estan extrayendo los datos
//menos logica del negocio dejando solo logica del estado de la app
export const createNote = content => {
  return async dispatch => {
    //crea note en el servidor
    const newNote = await createNewNote(content)
    
    //crea note para que se vea frontend
    dispatch({
      type:'CREATE_NOTE',
      payload: newNote
    })
  }
}

export const deleteNote = id => {
  return async dispatch => {
    deleteFromServer(id)

    dispatch({
      type:'DELETE_NOTE',
      payload: {
        id
      }
    })
  }
}

export const toggleImportantNote = note => {
  return async dispatch => {
    changeImportance({...note, important:!note.important})

    dispatch({
      type:'TOGGLE_IMPORTANT',
      payload: {
        id:note.id
      }
    })
  }
}

export const editNote = (id) => {
  return {
    type: 'EDIT_NOTE',
    payload: {
      id
    }
  }
}

export const updateNote = (note) => {
  return async dispatch => {
    updateServerNote(note)

    dispatch({
      type:'UPDATE_NOTE',
      payload:{
        note
      }
    })
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

//usando thunk para acciones asincronas
export const initNotes = () => {
  return async dispatch => {
    const notes = await getNotes()

    dispatch({
      type:'INIT_NOTES',
      payload:notes
    })
  }
  
}

export default noteReducer;
