import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../dialogs/error-dialog/error-dialog.component';
import { Router } from '@angular/router';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-texto-data',
  templateUrl: './texto-data.component.html',
  styleUrls: ['./texto-data.component.css']
})
export class TextoDataComponent {
  textoInput: string = '';
  dataInput: string = '';
  isDataInvalida: boolean = false;
  descErro: string = '';
  

  constructor(public dialog: MatDialog, private rota: Router){

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      width: '600px',
      data: { descErro: this.descErro },
      disableClose: true,
      position: {top: '-20rem', left: '44rem'},
      panelClass: 'custom-dialog-container'
    });

    document.body.classList.add('dialog-open');

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialogo foi fechado');
      document.body.classList.remove('dialog-open');
    });
  }

  voltarHome(){
    this.rota.navigate(['']);
  }


  enviarInformacoes(){

    if (!this.textoInput || !this.dataInput) {
      this.descErro = 'Por favor, preencha todos os campos corretamente.';
      this.openDialog();
      return;
    }

    const inputData = moment(this.dataInput).tz(moment.tz.guess());
    const dataAtual = moment().tz(moment.tz.guess());

    
    if(inputData.isBefore(dataAtual, 'day')){
      this.descErro = 'Por favor, insira uma data válida.'
      this.openDialog();
      this.isDataInvalida = true;
      this.dataInput = '';
      return;
    } 

    console.log('Texto Inserido: ', this.textoInput);
    console.log('Data Inserida: ', this.dataInput);

    this.textoInput = '';
    this.dataInput = '';
    this.isDataInvalida = false;
  }

}
