import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
interface Cliente{
  ClienteID: number,
    NroDocumento: string,
    NombreApelllido: string,
    Direccion: string,
    Telefono:  string,
}
@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  constructor(private http:HttpClient){ }

  getClientes(){
    return this.http.get<Cliente[]>("https://www.hostcatedral.com/api/appCatalogoLibro/public/getClientes")
  }
}
