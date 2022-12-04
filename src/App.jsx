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

  const filterSelected = value => {
    console.log(value);
  }

  return(
    <div className="App">
      <NoteForm />
      <div>
        all
        <input type="radio" name="filter" onChange={() => filterSelected('ALL')}/>
        important
        <input type="radio" name="filter" onChange={() => filterSelected('IMPORTANT')}/>
        no important
        <input type="radio" name="filter" onChange={() => filterSelected('NO_IMPORTANT')}/>
      </div>
      <Notes/>
    </div>
  );
}

export default App;
