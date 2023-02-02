import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AutentitcacaoInterceptor } from './autentitcacao.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutentitcacaoInterceptor,
      multi: true,
    },
  ],
})
export class AutenticacaoModule { }
