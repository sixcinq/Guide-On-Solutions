import { Directive, HostListener } from '@angular/core';

@Directive({selector: '[serviceMouseEnter]'})
export class ServiceMouseEnterDirective {

  @HostListener('mouseenter') onMouseEnter() {
    //alert("You just hovered over me!");
  }
}