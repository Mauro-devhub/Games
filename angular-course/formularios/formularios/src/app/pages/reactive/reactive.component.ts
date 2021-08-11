import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit{

  forma: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.createForm();
    this.cargarDataalform();
  }

  ngOnInit() {}

  cargarDataalform = () => {

  }

  createForm = () => {
    this.forma = this.fb.group({
      nombre: ['',[
        Validators.required,
        Validators.maxLength(12),
      ]],
      apellido: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      correo: ['', [
        Validators.required,
        Validators.email,
      ]],
      direccion: this.fb.group({
        distrito:['', Validators.required, Validators.minLength(5)],
        ciudad: ['', Validators.required, Validators.minLength(5)]
      })
    })
  }

  get vldtr() {
    return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched
  }

  get apellido() {
    return this.forma.get('apellido')?.invalid && this.forma.get('apellido')?.touched
  }

  get correo() {
    return this.forma.get('correo')?.invalid && this.forma.get('correo')?.touched
  }

  get distrito() {
    return this.forma.get('direccion.distrito')?.invalid && this.forma.get('direccion.distrito')?.touched
  }

  get ciudad() {
    return this.forma.get('direccion.ciudad')?.invalid && this.forma.get('direccion.ciudad')?.touched
  }

  guardar = () => {
    console.log(this.forma);

    if (this.forma.invalid) {
      return Object.values( this.forma.controls ).forEach( control => {

        if (control instanceof FormGroup) {
          Object.values( this.forma.controls ).forEach( control => { 
            control.markAllAsTouched();
          })
        } else {
        control.markAsTouched();
      }})}
  }
}
