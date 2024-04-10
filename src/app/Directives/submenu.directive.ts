import { Directive ,AfterViewInit,ElementRef,Renderer2,HostListener} from '@angular/core';

@Directive({
  selector: '[appSubmenu]',
  standalone: true
})
export class SubmenuDirective implements AfterViewInit{

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  ngAfterViewInit(){
    this.togglevisibility('hidden')
  }


  @HostListener('mouseenter') onMouseEnter(){
    this.togglevisibility('visible')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.togglevisibility('hidden')
  }

  private togglevisibility(display:string){
    const submenu=this.element.nativeElement.querySelector('ul');
    this.renderer.setStyle(submenu,'visibility',display)
  }

}
