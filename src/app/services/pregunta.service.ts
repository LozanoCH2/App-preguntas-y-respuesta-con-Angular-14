import { Injectable } from '@angular/core';
import { Respuesta } from '../models/respuesta';
import { Pregunta } from '../models/pregunta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
indexPregunta = 0 ; 
opcionSelecionada !: Respuesta;
deshabilitarBtn=true;
pregConfirmada=false;
indexRespuesta = 0;
respuestasUsuario:Array<number> =[];

  public preguntas: Pregunta[]=[
    new Pregunta('Cual es la capital de Hidalgo',[
      new Respuesta('Pachuca', 1),
      new Respuesta('Tepeapulco', 0),
      new Respuesta('Huejutla', 0),
      new Respuesta('Tulancingo', 0)  
    ]),
    new Pregunta('Cual es la capital de Francia',[
      new Respuesta('Roma', 0),
      new Respuesta('Paris', 1),
      new Respuesta('Dublin', 0),
      new Respuesta('Atenas', 0)  
    ]),
    new Pregunta('Cual es la capital de Egipto',[
      new Respuesta('Londres', 0),
      new Respuesta('Berlin', 0),
      new Respuesta('El cairo', 1),
      new Respuesta('Casablanca', 0)  
    ])
  ];

  constructor() { }

  getPreguntas(){
    return this.preguntas.slice()
  }
}
