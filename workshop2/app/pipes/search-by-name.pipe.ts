import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(value: any[],args: string): any {
    if(!value) return null;
    if(!args) return value;
    const movieName:string = args.toLowerCase()
    return value.filter(movie=>movie.name.toLowerCase().indexOf(movieName)!=-1)
  }

}
