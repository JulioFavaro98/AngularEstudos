import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../dialogs/error-dialog/error-dialog.component';

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
  

  constructor(public dialog: MatDialog){

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
    document.body.classList.add('overlay')

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialogo foi fechado');
      document.body.classList.remove('dialog-open');
      document.body.classList.remove('overlay')
    });
  }


  enviarInformacoes(){

    if (!this.textoInput || !this.dataInput) {
      this.descErro = 'Por favor, preencha todos os campos corretamente.';
      this.openDialog();
      return;
    }

    const inputData = new Date(this.dataInput);
    const dataAtual = new Date();
    

    if(inputData < dataAtual){
      this.descErro = 'Por favor, insira uma data válida.'
      this.openDialog();
      this.isDataInvalida = true;
      this.dataInput = '';
      return
    }

    const formatarData = (date: Date) => {
      const dia = ('0' + date.getUTCDate()).slice(-2);
      const mes = ('0' + (date.getUTCMonth() + 1)).slice(-2);
      const ano = date.getUTCFullYear();
      return `${dia}/${mes}/${ano}`;
    };

    const dataFormatada = formatarData(inputData);

    console.log('Texto Inserido: ', this.textoInput);
    console.log('Data Inserida: ', dataFormatada);

    this.textoInput = '';
    this.dataInput = '';
    this.isDataInvalida = false;
  }

}
