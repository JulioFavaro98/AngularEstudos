import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextoDataComponent } from './modules/exemplos/texto-data/texto-data.component';
import { FormsModule } from '@angular/forms';
import { ErrorDialogComponent } from './modules/exemplos/dialogs/error-dialog/error-dialog.component';
import { HomeComponent } from './modules/home/home.component';
import { PopupCampotextoComponent } from './modules/exemplos/dialogs/popup-campotexto/popup-campotexto.component';
import { CpfCnpjComponent } from './modules/exemplos/cpf-cnpj/cpf-cnpj.component';


@NgModule({
  declarations: [
    AppComponent,
    TextoDataComponent,
    ErrorDialogComponent,
    HomeComponent,
    PopupCampotextoComponent,
    CpfCnpjComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
