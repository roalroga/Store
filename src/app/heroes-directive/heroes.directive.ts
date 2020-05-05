import { Directive, ElementRef, Renderer2  } from '@angular/core';

@Directive({
  selector: '[appHeroes]'
})
export class HeroesDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, "fontSize", "20px");
    renderer.setStyle(el.nativeElement, "color", "blue");
    renderer.setStyle(el.nativeElement, "font", "Arial");
  }
}
