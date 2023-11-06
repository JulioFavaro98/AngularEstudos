import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextoDataComponent } from './modules/exemplos/texto-data/texto-data.component';
import { HomeComponent } from './modules/home/home.component';
import { CpfCnpjComponent } from './modules/exemplos/cpf-cnpj/cpf-cnpj.component';
import { StringFormaterComponent } from './modules/exemplos/string-formater/string-formater.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'texto-data', component: TextoDataComponent},
  {path: 'cpf-cnpj', component: CpfCnpjComponent},
  {path: 'string-formater', component: StringFormaterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
