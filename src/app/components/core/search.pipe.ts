import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform<T>(items:T[], searchTerm:string, key:keyof T): T[] {
    return searchTerm && searchTerm !== ''?
    items.filter((items) => String(items[key]).toLowerCase().includes(searchTerm.toLowerCase())) :items
  };

}
