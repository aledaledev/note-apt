import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditNote from "./components/EditNote";
import Filters from "./components/Filters";
import NoteForm from "./components/NoteForm";
import Notes from "./components/Notes";
import { initNotes } from "./reducers/noteReducer";

function App() {

  const dispatch = useDispatch()
  const notes = useSelector(state => state.notes)

  useEffect(() => {
    dispatch(initNotes())
  },[])

  return(
    <div className="App">
      <NoteForm />
      <Filters/>
      <Notes/>
      {notes.editNoteId!==''?<EditNote/>:null}
    </div>
  );
}

export default App;
