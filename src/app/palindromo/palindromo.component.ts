import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  templateUrl: './palindromo.component.html',
  styleUrls: ['./palindromo.component.css']
})
export class PalindromoComponent {
  respuesta: string = "";

  Palindromo():void{
    const palabra = document.getElementById("palabra") as HTMLInputElement;
    const p1 = palabra.value;
    var p2="";

    
    for(let i = p1.length-1; i>=0; i--){
      p2+=p1[i];
    }

    if (p1==p2) {
      window.alert(p1+" "+"Es palindramo")
    }else
      window.alert(p1+" "+"No es palindramo")
    }
  }
