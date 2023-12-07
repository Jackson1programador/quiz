import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//component
import { HomeComponent } from './pages/home/home.component';
import { TypePlayComponent } from './pages/type-play/type-play.component';
import { CategoryComponent } from './pages/category/category.component';
import { PlayingComponent } from './pages/playing/playing.component';
import { FormQuizComponent } from './pages/form-quiz/form-quiz.component';
import { VipComponent } from './pages/vip/vip.component';
import { LoginComponent } from './pages/login/login.component';
import { ErroComponent } from './pages/erro/erro.component';

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch: 'full' },
  {path: "type-play", component: TypePlayComponent },
  {path: "category", component: CategoryComponent },
  {path: "playing", component: PlayingComponent },
  {path: "form-quiz", component: FormQuizComponent },
  {path: "vip", component: VipComponent },
  {path: "login", component: LoginComponent },
  {path: "404", component: ErroComponent },
  {path: "**", redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
