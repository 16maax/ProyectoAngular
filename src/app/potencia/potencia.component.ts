import { Component } from '@angular/core';

@Component({
  selector: 'app-potencia',
  templateUrl: './potencia.component.html',
  styleUrls: ['./potencia.component.css']
})
export class PotenciaComponent {
    resultado: any;
  
    potencia(numero: any, potencia: any):void {
      this.resultado = 1;
      for (let i = 0; i < potencia; i++) {
        this.resultado *= numero;
      }
      window.alert(this.resultado)
    }
  }
