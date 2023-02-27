import { Component, ElementRef, OnInit, Renderer2, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  screen="";
  a: any;
  b:any;
  c:any;
  d="";
  e="";


  @ViewChild('mostrarOperaciones', {static: true}) mostrarOperaciones!: ElementRef;

  constructor(private renderer: Renderer2){

  }

  ngOnInit(): void {

  }

  enterValue(value:string){
    if((this.b=="+") || (this.b=="-") || (this.b=="x") || (this.b=="/")){
      this.d = this.d + value;
      this.screen = this.screen + value;
      this.c = this.d;

    }else{
      this.screen = this.screen + value;
      this.a = this.screen;
    }
  }

  condition(value:string){
    this.screen = this.screen + value;
    this.b = value;
  }

  clear(){
    this.screen="";
    this.a = "";
    this.b = "";
    this.c = "";
    this.d = "";
    this.e = "";
  }

  result(){
    if(this.b== '+'){
      this.screen = `${this.screen} = ${(parseInt(this.a) + parseInt(this.c)).toString()}`;

      this.screen = (parseFloat(this.screen) + parseInt(this.c)).toString();
    }

    if(this.b== '-'){
      this.screen = `${this.screen} = ${(parseInt(this.a) - parseInt(this.c)).toString()}`;

      this.screen = (parseFloat(this.screen) - parseInt(this.c)).toString();
    }

    if(this.b== '*'){
      this.screen = `${this.screen} = ${(parseInt(this.a) * parseInt(this.c)).toString()}`;

      this.screen = (parseFloat(this.screen) * parseInt(this.c)).toString();
    }

    if(this.b== '/'){
      this.screen = `${this.screen} = ${(parseInt(this.a) / parseInt(this.c)).toString()}`;

      this.screen = (parseFloat(this.screen) / parseInt(this.c)).toString();
    }

  }

  crearHtml(operacion:string, resultado:string){
  }

}
