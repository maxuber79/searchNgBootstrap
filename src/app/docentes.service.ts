import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/*
* @Interfaces
**/
import { DummyDocente } from "../app/searchList.interface";

/*
* @Otros
**/

@Injectable({
  providedIn: 'root'
})
export class DocentesService {


  constructor(private http: HttpClient) { 
		console.warn('[DEBUG]: Start All services');
  }

  

	getDummyDocentes(): Observable<DummyDocente> {
		const usuariosLista = 'assets/dummy/dummy-vra-mercado-docente.json';
		return this.http.get<DummyDocente>(usuariosLista);
	}
}
