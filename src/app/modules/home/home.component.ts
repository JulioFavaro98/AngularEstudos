import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  exemplos: any = [
    {id: 'texto-data', descricao: 'Texto-data'},
    {id: 'pop-up', descricao: 'Pop-up [Em produção]'}
  ]

  constructor(private rota: Router){}

  irParaExemplos(exemplo: string): void {
    switch (exemplo){
      case 'texto-data':
        this.rota.navigate(['/texto-data']);
        break;
      default:
        this.rota.navigate(['']);
    }
  }
}
