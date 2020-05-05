import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDestacarpalabra]'
})
export class DestacarpalabraDirective {

  constructor(el: ElementRef, renderer: Renderer2) {
      renderer.setStyle(el.nativeElement, 'fontSize', '50px');
      renderer.setStyle(el.nativeElement, 'color', 'red');
      renderer.setStyle(el.nativeElement, 'border', '2px solid red');

   }

}
