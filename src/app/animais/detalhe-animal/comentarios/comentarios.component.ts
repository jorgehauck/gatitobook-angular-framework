import { switchMap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

import { ComentariosService } from './comentarios.service';
import { Comentarios } from './comentarios';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  @Input()
  id!: number;
  comentarios$!: Observable<Comentarios>;
  comentarioForm!: FormGroup;

  constructor(
    private comentariosService: ComentariosService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.comentarios$ = this.comentariosService.buscarComentario(this.id);
    this.comentarioForm = this.formBuilder.group({
      comentario: ['', Validators.maxLength(300)],
    });
  }

  public gravar(): void {
    const comentario = this.comentarioForm.get('comentario')?.value ?? '';
    this.comentarios$ = this.comentariosService.incluiComentario(
      this.id,comentario)
        .pipe(
        switchMap(() => this.comentariosService.buscarComentario(this.id)),
        tap(() => {
          alert('Salvo comentário!');
          this.comentarioForm.reset();
      })
    );
  }
}
