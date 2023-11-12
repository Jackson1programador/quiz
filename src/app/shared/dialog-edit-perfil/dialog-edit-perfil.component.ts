import { Component, OnInit } from '@angular/core';

// angular material
import { MatDialogRef } from '@angular/material/dialog';

//interface
import { User } from 'src/app/interface/User';

// service
import { ServiceUserPerfilService } from 'src/app/service/service-user-perfil.service';

@Component({
  selector: 'app-dialog-edit-perfil',
  templateUrl: './dialog-edit-perfil.component.html',
  styleUrls: ['./dialog-edit-perfil.component.scss']
})
export class DialogEditPerfilComponent implements OnInit{

  constructor(
    public dialogRef: MatDialogRef<DialogEditPerfilComponent>,
    public userPerfilService: ServiceUserPerfilService

  ) {}

  public user?: User
  public teste: string = "teste"

  ngOnInit(): void {
    this.user = this.userPerfilService.user

  }



  cancel(): void {
    this.dialogRef.close();
  }

  edit(): void {
    this.dialogRef.close();
  }



}
