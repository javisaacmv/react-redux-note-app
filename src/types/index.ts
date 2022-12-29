export namespace NoteApp {
    export type noteType = {
        id: number;
        content: string;
        important: boolean;
      };
    
    export type stateType = {
        notes: NoteApp.noteType[];
        filter: any;
      };
}