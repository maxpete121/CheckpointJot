import { AppState } from "../AppState.js";
import { Notes } from "../models/Notes.js";
import { getFormData } from "../utils/FormHandler.js";
import { loadState, saveState } from "../utils/Store.js";



class NoteService{

    lookNote(noteId){
        const NoteNeeded = AppState.Notes.find(note => note.Id == noteId)
        let editDate = new Date()
        NoteNeeded.updateTime = editDate
        console.log(NoteNeeded.updateTime)
        AppState.ActiveNote = NoteNeeded
        console.log(AppState.ActiveNote)
    }

    newNote(formData){
        const NewNote = new Notes(formData)
        AppState.Notes.push(NewNote)
    }

    deleteNote(noteID){
        const noteDelete = AppState.Notes.findIndex(note => note.Id == noteID)
        AppState.Notes.splice(noteDelete, 1)
        console.log('note',AppState.note)

        
    }

    saveApp(){
        saveState('notes', AppState.Notes)
    }

    loadApp(){
        let loadNote = loadState('notes',[Notes])
        AppState.Notes = loadNote
    }

}


export const noteService = new NoteService()