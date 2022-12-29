type actionType = {
    type: string
    payload: any
}

type noteType = {
    id: number
    content: string
    important: boolean
}

const initialState: noteType[] = []


export const noteReducer = (state: noteType[] = initialState, action: actionType) => {

    if (action.type === '@note/init'){
        return action.payload
      }

    if (action.type === '@note/created'){
      return [...state, action.payload]
    }

    if(action.type === '@note/toggle_importance') {
        const {id} = action.payload
        return state.map((note: noteType) => {
            if(note.id === id){
               return {
                ...note,
                important: !note.important
               }
            }
            return note
        })

    }

    return state
  }