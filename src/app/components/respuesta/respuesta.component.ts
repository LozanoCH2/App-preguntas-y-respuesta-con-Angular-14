import { Component, OnInit } from '@angular/core';
import { PreguntaService } from '../../services/pregunta.service';
import { Pregunta } from '../../models/pregunta';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrl: './respuesta.component.css'
})
export class RespuestaComponent implements OnInit {
  listPreguntas !: Pregunta[];
  respuestasUsuario !: any[];


  constructor(private preguntaService:PreguntaService, private router:Router){

  }
  ngOnInit(): void {
    this.listPreguntas=this.preguntaService.preguntas;
    this.respuestasUsuario=this.preguntaService.respuestasUsuario;
  }

  volver(){
    this.preguntaService.respuestasUsuario=[];
    this.router.navigate(['/'])
  }

  

}
