import { User } from './../interface/User';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserPerfilService {

  constructor( ) { }

  public user?: User

  public emitEditInforUser = new EventEmitter ();

  editInfoUser(nameUser: string, nameOffice: string, imgUser: string  ) {
    var user: User = {name: nameUser, oficce: nameOffice, img: imgUser, id: 1}
    this.user = user

  }


}
