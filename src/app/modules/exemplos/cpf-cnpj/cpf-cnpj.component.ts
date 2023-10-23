import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cpf-cnpj',
  templateUrl: './cpf-cnpj.component.html',
  styleUrls: ['./cpf-cnpj.component.css']
})
export class CpfCnpjComponent {

  constructor(private rota: Router){}

  listaDocumentos: any[] = [];
  tipoDocumento: string = 'cpf';
  documento: string = '';

  documentoEmEdicao: number | null = null;
  tipoDocumentoEdit: string = 'cpf';
  documentoEdit: string = '';

  validarDocumento() {
    if (this.tipoDocumento === 'cpf' && this.documento.length != 11) {
      this.documento = ''; 
    } else if (this.tipoDocumento === 'cnpj' && this.documento.length != 14) {
      this.documento = ''; 
    }
  }

  enviar(){
    const documento = {
      tipo: this.tipoDocumento,
      numero: this.documento
    };
    this.listaDocumentos.push(documento);
    this.limparCampos();
  }

  editarDocumento(index: number) {
    this.documentoEmEdicao = index;
    this.tipoDocumentoEdit = this.listaDocumentos[index].tipo;
    this.documentoEdit = this.listaDocumentos[index].numero;
  }

  salvarEdicao(index: number) {
    this.listaDocumentos[index].tipo = this.tipoDocumentoEdit;
    this.listaDocumentos[index].numero = this.documentoEdit;
    this.documentoEmEdicao = null;
    this.limparCampos();
  }

  cancelarEdicao(index: number) {
    this.documentoEmEdicao = null;
    this.limparCampos();
  }

  excluirDocumento(index: number) {
    this.listaDocumentos.splice(index, 1);
  }

  voltar(){
    this.rota.navigate(['']);
  }

  limparCampos() {
    this.tipoDocumento = 'cpf';
    this.documento = '';
  }

}
