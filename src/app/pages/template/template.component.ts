import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditPerfilComponent } from 'src/app/shared/dialog-edit-perfil/dialog-edit-perfil.component';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent implements OnInit{

  constructor (public dialog: MatDialog) {}

  // public imgUser: String = "../../../assets/fotoUsuario.png"
  public imgUser: String = "../../../assets/teste.jpg"
  public nameUser: String = "Jackson"
  public nameOffice: String = "Dev FullStack"

  public showQuizDesktop: boolean = true;



  openDialogEditUser(): void {
    const dialogRef = this.dialog.open(DialogEditPerfilComponent, {
      data: {nameUser: this.nameUser, nameOffice: this.nameOffice, imgUser: this.imgUser},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.nameUser = result;
    });
  }

  ngOnInit(): void {

  }

}
