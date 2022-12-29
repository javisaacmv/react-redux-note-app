import { useDispatch } from "react-redux";
import { createNote } from "../reducers/noteReducer/actionCreators";
import { createNew } from "../services/notes";

const NewNote = () => {
  const dispatch = useDispatch();

  const addNote = (event: any) => {
    event.preventDefault();
    const { target } = event;
    const content = target.note.value;
    target.note.value = "";

    dispatch(createNote(content) as any);
  };

  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button>add</button>
    </form>
  );
};

export default NewNote;
