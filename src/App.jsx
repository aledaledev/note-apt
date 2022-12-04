import React from "react";
import ReactDOM from "react-dom";
import NoteForm from "./components/NoteForm";
import Notes from "./components/Notes";

/*dispatch({
    type: "CREATE_NOTE",
    payload: {
      content: "Play computer games",
      important: true,
      id: 1,
    },
  });

  dispatch({
    type: "CREATE_NOTE",
    payload: {
      content: "Cook",
      important: false,
      id: 2,
    },
  });*/

function App() {
  //const store = useStore()
  //const state = store.getState()
  return (
    <div className="App">
      <NoteForm />
      <Notes/>
    </div>
  );
}

export default App;
