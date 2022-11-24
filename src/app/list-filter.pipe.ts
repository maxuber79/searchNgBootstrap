import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {

	/* 
	
	transform(items: any[], field: string, value: string): any[] {
		if (!items) {
			return [];
		}
		if (!field || !value) {
			return items;
		}

		return items.filter((singleItem) =>
			singleItem[field].toLowerCase().includes(value.toLowerCase())
		);
	}
	
	*/

	/* transform(list: any[], filterText: string): any {
		return list ? list.filter(item => item.nombre.search(new RegExp(filterText, 'i')) > -1) : [];
	} */



	 
	transform(items: any[], field: string, value: string, filterText: string): any[] {
		if (!items) {
			return [];
		}
		if (!field || !value) {
			return items;
		}
		
		return items ? items.filter(item => item[field].toLowerCase().includes(value.toLowerCase()).item.nombre.search(new RegExp(filterText, 'i')) > -1) : [];
		 
	}
}
