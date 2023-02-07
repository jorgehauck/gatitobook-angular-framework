import { ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    MensagemModule,
    ReactiveFormsModule
  ],
  exports: [
    MensagemModule, ReactiveFormsModule
  ]
})
export class SharedModule { }
