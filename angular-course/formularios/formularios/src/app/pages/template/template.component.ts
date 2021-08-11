import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit{

  user:any = {
    name: 'Mauricio',
    apellido: 'De Los Santos Sanchez',
    correo: 'dsmauricio16@gmail.com',
    pais: ''
  }

  paises:any;

  constructor( private countriesService: PaisService) {}


  ngOnInit() {
    this.countriesService.getPaises().subscribe( paises => {
      this.paises = paises;

      this.paises.unshift({
        nombre: '[Seleccione un Pais]',
        codigo: ''
      })
    })
  }

  guardar( forma:NgForm ) {
    if (forma.invalid) {
      Object.values( forma.control ).forEach( control => {
        control.markAsTouched();
      });
      return;
    }
    console.log(forma.value);
  }
}