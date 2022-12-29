import { useEffect } from "react";
import { useDispatch } from "react-redux";
import NewNote from "./components/NewNote";
import Notes from "./components/Notes";
import { initNotes } from "./reducers/noteReducer/actionCreators";

const App = () => {
  const dispatch = useDispatch();

  const filterSelected = (value: string) => {
    console.log(value);
  };

  useEffect(() => {
    dispatch(initNotes() as any);
  }, []);

  return (
    <div className="App">
      <NewNote />
      <div>
        all
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected("ALL")}
        />
        important
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected("IMPORTANT")}
        />
        no important
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected("NO_IMPORTANT")}
        />
      </div>
      <Notes />
    </div>
  );
};

export default App;
