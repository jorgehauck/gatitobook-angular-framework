import { Observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  private url: string = "http://localhost:3000/user/signup";

  constructor(
    private httpClient: HttpClient) { }

    public cadastraNovoUsuario(novoUsuario: NovoUsuario) {
      return this.httpClient.post(this.url, novoUsuario);
    }

    public verificaUsuarioExistente(nomeUsuario: string) {
      return this.httpClient.get(`http://localhost:3000/user/exists/${nomeUsuario}`);
    }
}
