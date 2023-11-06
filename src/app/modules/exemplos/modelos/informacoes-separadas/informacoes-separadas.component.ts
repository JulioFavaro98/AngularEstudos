import { Component } from '@angular/core';

@Component({
  selector: 'app-informacoes-separadas',
  templateUrl: './informacoes-separadas.component.html'
})
export class InformacoesSeparadasComponent {
  cnpjCorpo: string = '';
  cnpjFilial: string = '';
  cnpjDigito: string = '';
  indicadorProcesso: string = '';
  dataInicioVigencia: string = '';
  dataFimVigencia: string = '';
  dataAssinaturaContrato: string = '';
  dataLicitacaoContrato: string = '';
  codigoProdutoServico: string = '';
}
