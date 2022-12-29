import { AnyAction, Dispatch } from "redux";
import { createNew, getAll } from "../../services/notes";
import { NoteApp } from "../../types";

export const createNote = (content: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const note = await createNew(content);
    dispatch({
    type: "@note/created",
    payload: note
  })
  }
};

export const toggleImportanceOf = (id: string | number) => {
  return {
    type: "@note/toggle_importance",
    payload: {
      id,
    },
  };
};

export const initNotes = () => {
    return async (dispatch: Dispatch<AnyAction>) => {
        const notes = await getAll()
        dispatch({
            type: "@note/init",
            payload: 
            notes
            
        })
    }
}
