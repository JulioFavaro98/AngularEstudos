import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

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
  res: boolean = false;
  nomeArquivo: string = 'file.xlsx';

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
    this.res = confirm("Confirmar exclusão?");
    if (this.res == true){
      this.listaDocumentos.splice(index, 1);
    }
  }

  ordenarPorDocs(){
    this.listaDocumentos.sort((a, b) => a.tipo.localeCompare(b.tipo));
  }

  voltar(){
    this.rota.navigate(['']);
  }

  limparCampos() {
    this.tipoDocumento = 'cpf';
    this.documento = '';
  }

  exportExcel(){
    const table = document.getElementById("table-data");

    if (table){
      const cloneTable = table.cloneNode(true) as Element;

      const acoesColumns = cloneTable.querySelectorAll('.acoes-column');
    
      acoesColumns.forEach((acoesColumn) => {
      acoesColumn.remove();
      });

      const rows = cloneTable.querySelectorAll('tr');

      for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const cells = row.getElementsByTagName('td');


        if (cells.length > 2) {
          row.removeChild(cells[2]);
        }
      }

      const ws:XLSX.WorkSheet = XLSX.utils.table_to_sheet(cloneTable);

      const wb:XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

      XLSX.writeFile(wb, this.nomeArquivo);
    } else {
      console.log("Tabela não encontrada");
    }
    
  }

  exportPDF(){
    const doc = new jsPDF();
    const table = document.getElementById('table-data');

    if (table) {
      const data: any[] = [];
      const rows = table.querySelectorAll('tr');

      rows.forEach((row) => {
        const rowData = [];
        const cells = row.getElementsByTagName('td');

        for (let i = 0; i < cells.length; i++) {
          if (i !== 2) { // Não inclui a terceira coluna (Ações)
            rowData.push(cells[i].innerText);
          }
        }

        data.push(rowData);
      });

      const tableConfig = {
        startY: 10,
        head: [['Tipo Documento', 'Número Documento']],
        body: data,
      };

      (doc as any).autoTable(tableConfig); 
      doc.save('table.pdf');
    } else {
      console.log('Tabela não encontrada');
    }
  }
}
