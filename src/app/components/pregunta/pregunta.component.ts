import { Component, OnInit } from '@angular/core';
import { PreguntaService } from '../../services/pregunta.service';
import { Pregunta } from '../../models/pregunta';
import { Respuesta } from '../../models/respuesta';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrl: './pregunta.component.css'
})
export class PreguntaComponent implements OnInit{
  clase='';
  listPregunta!: Pregunta[];
  constructor (public preguntaService:PreguntaService){

  }

  ngOnInit(): void {
      this.listPregunta= this.preguntaService.getPreguntas();
  }

  obtenerPregunta(){
    return this.listPregunta[this.preguntaService.indexPregunta].descripcionPregunta;
  }

  respuestaSelecionada(respuesta: Respuesta, indexRta:number){
    if(this.preguntaService.pregConfirmada===true){
      return;
    }
    this.preguntaService.opcionSelecionada=respuesta;
    this.preguntaService.deshabilitarBtn=false;
    this.preguntaService.indexRespuesta= indexRta;
  }

  addClassOption(respuesta: Respuesta){
   //respuesta seleccionada y NO esta confirmada
    if(respuesta===this.preguntaService.opcionSelecionada && !this.preguntaService.pregConfirmada){
      this.clase = 'active text-light';
    }else if(respuesta === this.preguntaService.opcionSelecionada && 
      this.preguntaService.pregConfirmada && 
      this.preguntaService.opcionSelecionada.esCorrecta===1){
      
        this.clase = 'list-group-item-success';

    }else if(respuesta === this.preguntaService.opcionSelecionada && 
      this.preguntaService.pregConfirmada && 
      this.preguntaService.opcionSelecionada.esCorrecta===0){
      
        this.clase = 'list-group-item-danger';

    }else{
      this.clase='';
    }

    return this.clase;
  }

  iconCorrecta(respuesta:Respuesta){
    if(respuesta === this.preguntaService.opcionSelecionada && 
      this.preguntaService.pregConfirmada && 
      this.preguntaService.opcionSelecionada.esCorrecta===1){
        return true
      }else{
        return false
      }
  }

  iconIncorrecta(respuesta:Respuesta){
    if(respuesta === this.preguntaService.opcionSelecionada && 
      this.preguntaService.pregConfirmada && 
      this.preguntaService.opcionSelecionada.esCorrecta===0){
        return true
      }else{
        return false
      }
  }

}
