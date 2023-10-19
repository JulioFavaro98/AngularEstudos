import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-campotexto',
  templateUrl: './popup-campotexto.component.html',
  styleUrls: ['./popup-campotexto.component.css']
})
export class PopupCampotextoComponent {

  nome: string = '';

  constructor(
    public dialogRef: MatDialogRef<PopupCampotextoComponent>
  ){}

  confirmarNome(): void{
    this.dialogRef.close(this.nome);
  }

}
