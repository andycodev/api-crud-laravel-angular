import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: [],
})
export class UsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];
  form: FormGroup = this.fb.group({
    id: [''],
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
  });

  constructor(
    private usuarioService: UsuarioService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    console.log(this.form);
    this.getUsers();
  }

  getUsers() {
    this.usuarioService.getAll().subscribe((resp) => {
      this.usuarios = resp;
      console.log('Listado de usuarios con éxito!!!', resp);
    });
  }

  getUser(id: string) {
    this.usuarioService.getById(id).subscribe((resp) => {
      console.log('Detalle de usuario con éxito!!!', resp);
      this.form.patchValue({
        id: resp.id,
        name: resp.name,
        email: resp.email
      });
    });
  }

  addUser() {
    console.log(this.form.value);
    this.usuarioService.create(this.form.value).subscribe((resp) => {
      console.log('Usuario creado con éxito!!!', resp);
      this.form.reset();
      this.getUsers();
    });
  }

  updateUser(id: string) {
    this.usuarioService.update(id, this.form.value).subscribe((resp) => {
      console.log('Usuario actulizado con éxito!!', resp);
      this.form.reset();
      this.getUsers();
    });
  }

  master() {
    const id = this.form.value.id;
    id ? this.updateUser(id) : this.addUser();
  }

  deleteUser(id: string) {
    this.usuarioService.delete(id).subscribe((resp) => {
      console.log('Usuario eliminado con éxito!!!', resp);
      this.getUsers();
    });
  }
}
