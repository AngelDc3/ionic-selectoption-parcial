import { Component, NgZone, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { MascotaService } from '../services/mascota.service';
import { Cliente } from './Interfaces/Cliente';
import { Mascota } from './Interfaces/Mascota';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Vacuna } from './Interfaces/Vacunas';
import { headers } from './Interfaces/headers';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  clientes: Cliente [] = []
  idcliente:number= 0;
  mascotas: Mascota[] = []
  idmascota:number = 0;
  form: FormGroup;
  prueba: boolean = false
  Vmascotas: Vacuna[]=[]
  vacuna:boolean = false;

  constructor(private cliente:ClientesService, private mascota:MascotaService,private fb:FormBuilder, private ng:NgZone ) {
    this.form = this.fb.group({
      mascota:[''],
      cliente:['']
    })
  }

  ngOnInit() {
    this.cliente.getClientes().subscribe((res) => {
      this.clientes= res
    })
  }

  getMascotasByClient(id:number){
    console.log(id)
    this.mascota.getMascotas(this.idcliente).subscribe(
      res => {
        this.mascotas = res
      }
    )
    this.changePlaying()
  }
  changePlaying() {
    this.ng.run(() => {
      this.prueba = true;
    });
  }
  changeMascota() {
    this.ng.run(() => {
      this.vacuna = true;
    });
  }
  getVacunasByMascotaSelected(id:number){
    this.mascota.getVacunasByMascotas(id).subscribe(res =>{
      this.Vmascotas = res
      console.log(res)
    })
  }

  button(){
  }
}
