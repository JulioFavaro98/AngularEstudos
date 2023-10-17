import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextoDataComponent } from './modules/texto-data/texto-data.component';

const routes: Routes = [
  {path: '', component: TextoDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
