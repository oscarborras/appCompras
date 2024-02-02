import { Component } from '@angular/core';
import { ProveedoresService } from '../../servicios/proveedores.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [NgFor],
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.css'
})
export class ProveedoresComponent {
  mensaje !: string; 
  proveedores: any;

  constructor( private proveedoresService: ProveedoresService) { }
  
  ngOnInit() {
    //this.mensaje = this.proveedoresService.getProveedores( );
    this.proveedores = this.proveedoresService.getProveedores();
  }
}
