import { AppState } from "../AppState.js";
import { noteService } from "../services/NoteService.js";



export class NoteController{
    constructor(){
        this.drawNotes()
    }

    drawNotes(){
        const allNotes = AppState.Notes
        let template = ''
        allNotes.forEach(note => template += note.NoteTemplate)
        document.getElementById('note-view').innerHTML += template
    }

    drawNoteType(){
        const wantNote = AppState.ActiveNote
        let content = wantNote.newNoteTemplate
        document.getElementById('open-note').innerHTML = content
    }

    lookNote(noteId){
        noteService.lookNote(noteId)
        this.drawNoteType()
    }

    newNote(){
        event.preventDefault()
        const form = event.target
        const formData = getFormData(form)
        noteService.newNote(formData)
        this.drawNotes()
    }
}