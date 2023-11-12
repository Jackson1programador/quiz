import { Component, OnInit } from '@angular/core';

// angular material
import { MatDialog } from '@angular/material/dialog';

// component
import { DialogEditPerfilComponent } from 'src/app/shared/dialog-edit-perfil/dialog-edit-perfil.component';

// service
import { ServiceUserPerfilService } from '../../service/service-user-perfil.service'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent implements OnInit{

  constructor (
    public dialog: MatDialog,
    public userPerfilService: ServiceUserPerfilService
    ) {}

  public imgUser: string = "../../../assets/teste.jpg"
  public nameUser: string = "Jackson"
  public nameOffice: string = "Dev FullStack"

  public showQuizDesktop: boolean = true;



  openDialogEditUser(): void {
    this.userPerfilService.editInfoUser(this.nameUser, this.nameOffice, this.imgUser)
    const dialogRef = this.dialog.open(DialogEditPerfilComponent, {});
    dialogRef.afterClosed()
  }

  ngOnInit(): void {


  }

}
