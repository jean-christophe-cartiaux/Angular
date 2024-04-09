import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  standalone: true
})
export class CustomPipe implements PipeTransform {

  transform(a: number):string {
    const numberMapping:string[]=[
      'zéro',"un","deux","trois","quatre","six",'sept','huit',"neuf","dix","cinq"
    ]
    return numberMapping[a]
  }

}
