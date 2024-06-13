import { Component } from '@angular/core';
import { PreguntaService } from '../../../services/pregunta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrl: './botonera.component.css'
})
export class BotoneraComponent {
  btnString='Aceptar';
  constructor (public preguntaService: PreguntaService, private router:Router){

  }

  siguiente(){
    switch(this.btnString){
      case 'Aceptar':{
        this.preguntaService.pregConfirmada=true;
        this.btnString='Siguiente';
        if(this.preguntaService.preguntas.length -1 === this.preguntaService.indexPregunta){
          this.btnString='Finalizar';

        }

        break;
      }
      case  'Siguiente':{
        this.preguntaService.indexPregunta++;
        this.preguntaService.respuestasUsuario.push(this.preguntaService.indexPregunta);
        this.preguntaService.deshabilitarBtn=true;
        this.preguntaService.pregConfirmada=false;
        this.btnString='Aceptar';
        break;
      }
      case  'Finalizar':{
        this.preguntaService.respuestasUsuario.push(this.preguntaService.indexRespuesta);
        this.preguntaService.opcionSelecionada==null;
        this.preguntaService.pregConfirmada=false;
        this.preguntaService.indexPregunta=0;
        this.router.navigate(['/respuesta']);
      }
    }
  }

}
