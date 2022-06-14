import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

const { END_POINT } = environment;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
   private http: HttpClient
  ) {}

  getAll(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${END_POINT}/v1/users`);
  }

  getById(id: string): Observable<Usuario>{
    return this.http.get<Usuario>(`${END_POINT}/v1/user/${id}`);
  }

  create(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${END_POINT}/v1/addUser`, usuario);
  }

  update(id: string, usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${END_POINT}/v1/updateUser/${id}`, usuario);
  }

  delete(id: string): Observable<Usuario>{
    return this.http.delete<Usuario>(`${END_POINT}/v1/deleteUser/${id}`);
  }

/*   delete = (id: string): Observable<Usuario> => this.http.delete<Usuario>(`${END_POINT}/v1/${id}`); */  //Otra forma

}
