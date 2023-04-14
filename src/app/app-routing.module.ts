import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {GridPageComponent} from "./pages/grid-page/grid-page.component";

const routes: Routes = [
  {path: '', redirectTo: 'home-page' ,pathMatch: 'full'},
  {path: 'home-page', component: HomePageComponent},
  {path: 'grid-page', component: GridPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
