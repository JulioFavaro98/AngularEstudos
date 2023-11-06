import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InformacoesSeparadasComponent } from '../modelos/informacoes-separadas/informacoes-separadas.component';
import { ApiService } from '../../servicos/api.service';

@Component({
  selector: 'app-string-formater',
  templateUrl: './string-formater.component.html',
  styleUrls: ['./string-formater.component.css']
})
export class StringFormaterComponent {

  stringParaEnviar: string = '';
  informacoes: InformacoesSeparadasComponent = new InformacoesSeparadasComponent;

  constructor(private rota: Router, private apiService: ApiService){}

  enviarString() {
    this.apiService.enviarString(this.stringParaEnviar).subscribe(
      (response: InformacoesSeparadasComponent) => {
        this.informacoes = response;
      },
      (error) => {
        console.error('Erro ao enviar a string para a API: ', error);
      }
    );
  }

  voltarHome(){
    this.rota.navigate(['']);
  }

}
