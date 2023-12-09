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
        this.countNote(NewNote)
        this.saveApp()
    }

    openMake(){

    }

    deleteNote(noteID){
        const noteDelete = AppState.Notes.findIndex(note => note.Id == noteID)
        AppState.Notes.splice(noteDelete, 1)
        console.log('note',AppState.note)
        this.saveApp()
        
    }





    countNote(NewNote){
        let noteAdd = AppState.Notes
        let theCount = noteAdd.length
        let madeNote = NewNote
        console.log(NewNote)
        if(theCount == null){
            let theCount = 1
            // let noteNumber = 0
            // noteNumber += theCount
            madeNote.number = 0
            madeNote.number += theCount
            console.log(noteNumber)
        }else if(theCount >= 1){
            console.log('works')
            madeNote.number = 0
            madeNote.number += theCount

        }
        
    }

    saveApp(){
        saveState('notes', AppState.Notes)
        console.log()
    }

    loadApp(){
        let loadNote = loadState('notes',[Notes])
        AppState.Notes = loadNote
    }

}


export const noteService = new NoteService()