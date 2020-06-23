import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  mediaSub: Subscription;
  deviceXs: boolean;
  constructor(public mediaObserver: MediaObserver) {}
  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange) => {
      console.log(result.mqAlias);
      this.deviceXs = ((result.mqAlias === 'xs') || (result.mqAlias === 'sm') || (result.mqAlias === 'md')) ? true : false;
    })
  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }

  
}
