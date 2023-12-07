// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//routing
import { AppRoutingModule } from './app-routing.module';

//component
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { FormQuizComponent } from './pages/form-quiz/form-quiz.component';
import { PlayingComponent } from './pages/playing/playing.component';
import { TemplateComponent } from './pages/template/template.component';
import { DialogEditPerfilComponent } from './shared/dialog-edit-perfil/dialog-edit-perfil.component';
import { MenuIconComponent } from './shared/menu-icon/menu-icon.component';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';


//Serviços
import { ServiceUserPerfilService } from './service/service-user-perfil.service';
import { CategoryComponent } from './pages/category/category.component';
import { TypePlayComponent } from './pages/type-play/type-play.component';
import { VipComponent } from './pages/vip/vip.component';
import { ErroComponent } from './pages/erro/erro.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FormQuizComponent,
    PlayingComponent,
    TemplateComponent,
    DialogEditPerfilComponent,
    MenuIconComponent,
    CategoryComponent,
    TypePlayComponent,
    VipComponent,
    ErroComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatMenuModule



  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
