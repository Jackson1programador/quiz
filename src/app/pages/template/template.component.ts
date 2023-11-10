import { Component } from '@angular/core';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent {

public imgUser: String = "../../../assets/fotoUsuario.png"
public nameUser: String = "Jackson"
public nameOffice: String = "Dev FullStack"

}
