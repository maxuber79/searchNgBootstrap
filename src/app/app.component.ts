import { Component, OnInit, PipeTransform, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
/*
*@Servicios
**/
import { DocentesService } from "../app/docentes.service";

/*
*@Interfaces
**/
import { DummyDocente } from "../app/searchList.interface";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testNgBootstrap';
	searchTerm!: string;
	public allUsersDummy: DummyDocente[] = [];	
	 collectionSize: any;
	//collectionSize = COUNTRIES.length;
	page = 1;
	pageSize = 4;
	usuarios!: DummyDocente[];
	allUsuarios!: DummyDocente[];
	searchString!: string;

	 constructor(
		 private router: Router,
		 private http: HttpClient,
		 private activatedroute: ActivatedRoute,
		 private docentesservice: DocentesService,
		 
	 ) {
		 this.dummy();
	}

	ngOnInit(): void {}

	 dummy() {
		 this.docentesservice.getDummyDocentes().subscribe(
			(data: any) => {
				this.allUsersDummy = data.users;
				 console.log('%c[DEBUG] Data de la tabla input this.allUsersDummy >>>>>>>>>>', 'background: #28a745; color: #FFFFFF; padding: 2px 5px;', data.users);
				 	this.collectionSize = this.allUsersDummy.length
				 console.log('%c[DEBUG] Data de la tabla input this.collectionSize >>>>>>>>>>', 'background: #0dcaf0; color: #FFFFFF; padding: 2px 5px;', this.collectionSize);  
					this.allUsuarios = data.users;
				 console.log('%c[DEBUG] Data de la tabla input this.allUsuarios >>>>>>>>>>', 'background: #ffc107; color: #FFFFFF; padding: 2px 5px;', this.allUsuarios); 
				 
				 this.usuarios = this.allUsersDummy.map((userDummy, i) => ({ userDummy: i + 1, ...userDummy })).slice(
					 (this.page - 1) * this.pageSize,
					 (this.page - 1) * this.pageSize + this.pageSize,
				 );
				
			},
			(error) => {
				console.log(error);
			}
		);  
	}

	search(value: string): void {
		this.allUsuarios = this.allUsersDummy.filter((val) => val.nombre.toLowerCase().includes(value));
		this.collectionSize = this.usuarios.length;
	} 
}
