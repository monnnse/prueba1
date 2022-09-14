import { Component} from '@angular/core';

export interface Alumnos {
  rut : number;
  nombre : string;
  apellido : string;
  edad : number;
  seccion : string;
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent {

}
