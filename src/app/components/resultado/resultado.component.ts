import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent {
  bmi: number = 0;
  resutado: string = '';
  interpretacion: string = '';
  constructor(private route: ActivatedRoute)
  {
    //asignamos el valor del parametro a la varible
    this.bmi=+route.snapshot.paramMap.get('valor')!;
  }
  ngOnInit(): void{
    this.getResultado();
  }
  getResultado()
  {
    if(this.bmi>=25)
    {
      this.resutado='Exceso de peso';
      this.interpretacion='Tienes un peso superior al normal. Intente hacer mas ejercicio';
    } else if(this.bmi>=18.5)
      {
        this.resutado='Normal';
        this.interpretacion='Tienes un peso corporal normal. ¡buen trabajo!';
      }else
        {
          this.resutado='Bajo peso';
          this.interpretacion='Tienes un peso corporal mas bajo de lo normal. Puedes comer un poco mas!!';

        }


  }
}
