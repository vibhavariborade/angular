import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFormatter'
})
export class NamePipe implements PipeTransform {

  transform(value: string, args: string): any {    
    return value.replace(" ",args)
  }

}
