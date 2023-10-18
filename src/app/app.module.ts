import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextoDataComponent } from './modules/texto-data/texto-data.component';
import { FormsModule } from '@angular/forms';
import { ErrorDialogComponent } from './modules/dialogs/error-dialog/error-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    TextoDataComponent,
    ErrorDialogComponent
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
