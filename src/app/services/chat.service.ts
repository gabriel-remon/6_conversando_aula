import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { MensajeChat } from '../models/chat.model';
import { QueryDocumentSnapshot, QuerySnapshot, addDoc, collection, getFirestore, onSnapshot, orderBy, query } from 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  private dbMensajes = 'mensajes'

  //firestore = inject(AngularFirestore)
  dbFirebase =inject( AngularFirestore)

  guardarMensaje(mensaje: MensajeChat,tabla:string) {
 
    mensaje.fecha = new Date().toLocaleString('es-AR', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    })

    addDoc(collection(getFirestore(),tabla),mensaje).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }

  getMensajes(tabla:string){//,funcion:(mensajes:MensajeChat[])=>void,finaly?:()=>void) {
    // Crear una consulta ordenada por el campo 'fecha' en orden ascendente
    const mensajeRef = this.dbFirebase.collection(tabla,ref=>ref.orderBy('fecha'))
    
    //const q = query(mensajeRef,orderBy('fecha'))
    return mensajeRef.snapshotChanges() 
    
    
    /*
    try{
      return onSnapshot(q,(snapshot:QuerySnapshot)=>{
        let mensajes :MensajeChat[] =[];
        snapshot.forEach((doc:QueryDocumentSnapshot)=>{
          let mensajeIn =  doc.data() as MensajeChat
          mensajes.push( mensajeIn)
        })
        funcion(mensajes)
        finaly?finaly():""
      })
    }catch(error){
      finaly?finaly():""
      return error
    }*/
  }
}
