import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChatService } from 'src/app/services/chat.service';
import { MensajeChat } from '../../../models/chat.model';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-chat2',
  templateUrl: './chat2.page.html',
  styleUrls: ['./chat2.page.scss'],
})
export class Chat2Page implements OnInit {

  
  user = {uid:"pepeid"}
  userStorage =JSON.parse( localStorage.getItem('user'))
  chatSvc = inject(ChatService)
  baseDatos = "chat4b"
  utilsSvc = inject(UtilsService);

  form = new FormGroup({
    mensaje : new FormControl("",[Validators.required,Validators.minLength(1),Validators.maxLength(22)])
  })
  chatsFirebase=[]
  /*chatsFirebase = [
    {
      _uid:"pepeid",
      name:"pepe",
      fecha:"10/10/10",
      mensaje:"hola "
    },
    {
      _uid:"juanid",
      name:"pepe",
      fecha:"10/10/10",
      mensaje:"hola pepe"
    },
    {
      _uid:"pepeid",
      name:"pepe",
      fecha:"10/10/10",
      mensaje:"hola pepe"
    },
    {
      _uid:"juanid",
      name:"pepe",
      fecha:"10/10/10",
      mensaje:"hola pepe"
    },
    {
      _uid:"pepeid",
      name:"pepe",
      fecha:"10/10/10",
      mensaje:"hola pepe"
    },
    {
      _uid:"juanid",
      name:"pepe",
      fecha:"10/10/10",
      mensaje:"hola pepe"
    },
    {
      _uid:"pepeid",
      name:"pepe",
      fecha:"10/10/10",
      mensaje:"hola pepe"
    },
    {
      _uid:"juanid",
      name:"pepe",
      fecha:"10/10/10",
      mensaje:"hola pepe"
    },
    {
      _uid:"pepeid",
      name:"pepe",
      fecha:"10/10/10",
      mensaje:"hola pepe"
    },
    {
      _uid:"juanid",
      name:"pepe",
      fecha:"10/10/10",
      mensaje:"hola pepe"
    }
  ]*/
  constructor() { }

  ngOnInit() {
    //this.spinner.show();
    this.chatSvc.getMensajes(this.baseDatos).subscribe((docSnap)=>{
      if(this.chatsFirebase.length==0){
        docSnap.map(user=>{
          this.chatsFirebase.push(user.payload.doc.data() as MensajeChat)
        })
      }else{
        this.chatsFirebase.push(docSnap[docSnap.length-1].payload.doc.data()  as MensajeChat)
        this.utilsSvc.presentToast({
          message: "nuevo mensaje en el chat",
          duration: 2500,
          color: 'primary',
          position: 'top',
          icon: 'alert-circle-outline'
        })
      }
      setTimeout(()=>{
        this.mostrarUltimoMensaje()
      },50)
      console.log(this.chatsFirebase)

    })
/*
    this.chatSvc.getMensajes(this.baseDatos,(data)=>{
      this.chatsFirebase=data
      //console.log( this.chatsFirebase)
      //console.log( this.user)
      setTimeout(() => {
        this.mostrarUltimoMensaje()
      }, 50);
    })//,()=>{this.spinner.hide()})*/

    
  }

  mostrarUltimoMensaje(){
    let elements = document.getElementsByClassName('mensajeSelec')
    let ultimo :any = elements[(elements.length-1)]
    let top  :any =ultimo.offsetTop
    //@ts-ignore
   // document.getElementById('contenedorMensajes')?.scrollTop  = 1

    let  listaMensajes = document.getElementById('contenedorMensajes');
    listaMensajes?.scrollTo(
      top,
      top
    );
  }


  enviarMensaje(){
    let newMensaje: MensajeChat = {
      _uid: this.userStorage.uid,
      name:this.userStorage.name,
      fecha:"",
      mensaje:this.form.value.mensaje
    }
    console.log(newMensaje)
    this.chatSvc.guardarMensaje(newMensaje,this.baseDatos)

    this.form.setValue({mensaje:""})
  }

}
