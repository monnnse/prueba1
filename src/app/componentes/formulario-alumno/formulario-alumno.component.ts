import { Component, Input } from '@angular/core';
import { Alumnos } from 'src/app/modelo/alumnos/alumnos.component';


@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent {
  @Input() public rut : number = 0;
  @Input() public nombre : string = '';
  @Input() public apellido : string = '';
  @Input() public edad : number = 0;
  @Input() public seccion : string = '';

}
