import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextoDataComponent } from './modules/exemplos/texto-data/texto-data.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'texto-data', component: TextoDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
