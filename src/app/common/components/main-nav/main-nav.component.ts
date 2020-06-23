import { Component, Input, ViewChild, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @Input() deviceXs: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    @HostListener('click') onMouseEnter() {
      //alert("button was just clicked!");
    }

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }

  openMyMenu() {
    this.trigger.openMenu();
  }
  closeMyMenu() {
    this.trigger.closeMenu();
  }

  servicesClk() {
    console.log("@@@@  Inside servicesClk function!!!!");
    this.router.navigate(['/services']);
  }

}
