import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Filters from "./components/Filters";
import NoteForm from "./components/NoteForm";
import Notes from "./components/Notes";
import { initNotes } from "./reducers/noteReducer";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initNotes())
  },[])

  return(
    <div className="App">
      <NoteForm />
      <Filters/>
      <Notes/>
    </div>
  );
}

export default App;
