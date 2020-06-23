import { Directive, HostListener } from '@angular/core';

@Directive({selector: '[serviceClick]'})
export class ServiceClickDirective {

  @HostListener('click') onClick() {
    //alert("You just clicked me!");
  }
}