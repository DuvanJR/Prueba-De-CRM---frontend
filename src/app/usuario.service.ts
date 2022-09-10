import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //Esta URL obtiene el listado de todos los usuarios del backend, agenda de contacto.
  private baseURL = "http://localhost:8080/api/v1/usuarios";


  constructor(private httpClient : HttpClient) { }


  //Este metodo nos sirve para obtener los usuarios de la agenda de contacto
  obtenerListaDeUsuarios():Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.baseURL}`);
  }

  
  //Sirve para registrar un usuario / contacto
  registrarUsuario(usuario:Usuario) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,usuario);
  }


  //este metodo sirve para actualizar el empleado
  actualizarUsuario(id:number,usuario:Usuario) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,usuario);
  }


  //este metodo sirve para obtener o buscar un empleado
  obtenerUsuarioPorId(id:number):Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.baseURL}/${id}`);
  }



  eliminarUsuario(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


}
