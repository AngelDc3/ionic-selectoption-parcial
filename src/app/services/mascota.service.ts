import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mascota } from '../home/Interfaces/Mascota';
import { Vacuna } from '../home/Interfaces/Vacunas';


@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  id:number = 0;
  constructor(private http: HttpClient) { }

  getMascotas(id:number){
    return this.http.get<Mascota[]>(`https://www.hostcatedral.com/api/appCatalogoLibro/public/getMascotasPorCliente/${id}`)
  }

  getVacunasByMascotas(idM:number){
    return this.http.get<Vacuna[]>(`https://www.hostcatedral.com/api/appCatalogoLibro/public/getVacunasPorMascota/${idM}`)
  }
}
