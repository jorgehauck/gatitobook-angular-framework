import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string = "";
  senha: string = "";

  constructor(
    private authService: AutenticacaoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public login(): void {
   this.authService.autenticar(this.usuario, this.senha).subscribe(() => {
    this.router.navigate(['animais']);
   },
   (error) => {
    alert('Usuario ou senha inválido');
    console.log(error);
   })
  }
}
