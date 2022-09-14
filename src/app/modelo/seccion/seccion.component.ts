import { Component } from '@angular/core';

export interface Seccion {
  id : number;
  nombre : string;
}

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.scss']
})
export class SeccionComponent {

}
