import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopupCampotextoComponent } from '../exemplos/dialogs/popup-campotexto/popup-campotexto.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  exemplos: any = [
    {id: 'texto-data', descricao: 'Texto-data'},
    {id: 'pop-up', descricao: 'Pop-up nome'},
    {id: 'cpf-cnpj', descricao: 'CPF-CNPJ'}
  ]

  constructor(public dialog: MatDialog, private rota: Router){}

  nome: string = '';

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupCampotextoComponent, {
      width: '400px',
      disableClose: true,
      position: {top: '-20rem', left: '44rem'},
      panelClass: 'custom-dialog-container'
    });

    document.body.classList.add('dialog-open');

    dialogRef.afterClosed().subscribe((nome: string) => {
      console.log('Nome inserido: ' + nome);
      document.body.classList.remove('dialog-open');
      if(nome){
        this.nome = nome;
      }
    });
  }

  irParaExemplos(exemplo: string): void {
    switch (exemplo){
      case 'texto-data':
        this.rota.navigate(['/texto-data']);
        break;
      case 'pop-up':
        this.openDialog();
        break;
      case 'cpf-cnpj':
        this.rota.navigate(['/cpf-cnpj'])
        break;
      default:
        this.rota.navigate(['']);
    }
  }
}
