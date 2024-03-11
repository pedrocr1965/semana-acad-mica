import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  edad: number = 25;
  peso: number = 60;
  altura: number = 130;
  sexo: string = "Masculino";
  constructor(private router:Router) // revisar
  {

  }
  cambiarAltura(event: any)
  {
    console.log(event.target.value);
    this.altura=event.target.value;
  }
  masculino()
  {
    this.sexo="Masculino";
  }
  femenino()
  {
    this.sexo="Femenino";
  }
  calcularBMI()
  {
    // aqui realizamos los calculos
    const BMI=this.peso/Math.pow(this.altura/100,2);
    this.router.navigate(['./resultado', BMI.toFixed(1)]);
  }
}
