import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Note } from 'src/interfaces/user/nota.module';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: Note []=[];
  constructor(private apiServices: ApiService) { }

  createNote(note: Note){
    return new Promise((resolve,reject)=>{
        if(note != null){
            this.apiServices.setNote(note)
            resolve("Exito en la Operación, nota creada")
        }else{
            reject("Valor no valido")
        }
    })

}
  getNotes(){//Retorna la promesa o la regresa
      return new Promise<Note[]>((resolve, reject)=>{
          this.notes=this.apiServices.getNotes();
          resolve(this.notes);
      })
  }
  lastNote(){
    this.getNotes();
    if (this.notes.length>0){
    let lastItem = this.notes[this.notes.length-1];
    return lastItem.id+1;
    } else{
      return 1;
    }
  }
}
