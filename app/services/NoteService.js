import { AppState } from "../AppState.js";
import { Notes } from "../models/Notes.js";
import { getFormData } from "../utils/FormHandler.js";



class NoteService{

    lookNote(noteId){
        const NoteNeeded = AppState.Notes.find(note => note.Id == noteId)
        AppState.ActiveNote = NoteNeeded
        console.log(AppState.ActiveNote)
    }

    newNote(formData){
        const NewNote = new Notes(formData)
        AppState.Notes.push(NewNote)
    }

}


export const noteService = new NoteService()