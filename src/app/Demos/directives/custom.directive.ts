import {Directive, ElementRef, Renderer2} from '@angular/core';


@Directive({
  selector: '[changesBackground]',
  standalone: true
})
export class CustomDirective {

  constructor(private ElementRef: ElementRef,private renderer:Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(
      this.ElementRef.nativeElement,
      'background-color',
      'yellow'
    )
  }
}
