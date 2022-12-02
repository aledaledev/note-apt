const noteReducer = (state = [], action) => {
  if (action.type === "CREATE_NOTE") {
    //state.push(action.payload) ojo no mutar
    //return state.concat(action.payload);
    return [...state, action.payload]
  }
  if(action.type === "TOGGLE_IMPORTANT"){
    const {id} = action.payload
    return state.map(note => {
        if(note.id === id) {
            return {
                ...note,
                important:!note.important
            }
        }
         return note
    })
  }
  if(action.type === "DELETE_NOTE"){
    const {id} = action.payload
    return state.filter(note => note.id !== id)
  }
  return state;
};

//actionCreator
export const createNote = content => {
  return {
    type:'CREATE_NOTE',
    payload: {
      content: content,
      important: false,
      id: Math.floor(Math.random()*99999)
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


export default noteReducer;
