import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProveedoresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appCompras';
}
