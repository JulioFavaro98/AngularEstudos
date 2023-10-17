import { Component } from '@angular/core';

@Component({
  selector: 'app-texto-data',
  templateUrl: './texto-data.component.html',
  styleUrls: ['./texto-data.component.css']
})
export class TextoDataComponent {
  textoInput: string = '';
  dataInput: string = '';
  isDataInvalida: boolean = false;

  enviarInformacoes(){

    if (!this.textoInput || !this.dataInput) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }

    const inputData = new Date(this.dataInput);
    const dataAtual = new Date();

    if(inputData < dataAtual){
      alert("Insira uma data futura")
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
