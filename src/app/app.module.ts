import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PalindromoComponent } from './palindromo/palindromo.component';
import { PotenciaComponent } from './potencia/potencia.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    PalindromoComponent,
    PotenciaComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
