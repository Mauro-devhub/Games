import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PaisService implements OnInit{

  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
  }

  getPaises(){
    return this.http.get('https://restcountries.eu/rest/v2/lang/es').pipe( 
      map( (data:any) => {
        return data.map( (pais:any) => {
          return {
            nombre: pais.name,
            code: pais.alpha3Code
          }
        })
    }))
  }
}
