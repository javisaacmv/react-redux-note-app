import { useDispatch, useSelector } from "react-redux";
import { toggleImportanceOf } from "../reducers/noteReducer/actionCreators";
import { NoteApp } from "../types";

type noteProps = {
  note: NoteApp.noteType;
  toggleImportant: (id: string | number) => void;
};

const Note = ({ note, toggleImportant }: noteProps) => (
  <li onClick={() => toggleImportant(note.id)}>
    {note.content}
    <strong>{note.important ? " Important" : " Not important"}</strong>
  </li>
);

const Notes = () => {
  const notes = useSelector((state: NoteApp.stateType) => state.notes);

  const dispatch = useDispatch();

  const toggleImportant = (id: any) => {
    dispatch(toggleImportanceOf(id));
  };

  return (
    <ul>
      {notes.map((note) => (
        <Note key={note.id} note={note} toggleImportant={toggleImportant} />
      ))}
    </ul>
  );
};

export default Notes;
