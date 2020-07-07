import { Injectable, NgZone } from '@angular/core';
import { fromEventPattern, Observable } from 'rxjs';
import { startWith, pluck } from 'rxjs/operators';

import { enterZone } from './enterZone';

export enum Breakpoint {
  PHONE = '(max-width: 767px)',
  TABLET = '(min-width: 768px)',
  DESKTOP = '(min-width: 992px)',
  LARGE = '(min-width: 1200px)'
}

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  constructor(private zone: NgZone) {}

  is$ = (breakpoint: Breakpoint): Observable<boolean> =>
    fromEventPattern((handler) =>
      window.matchMedia(breakpoint).addListener(handler)
    ).pipe(
      enterZone(this.zone),
      startWith(window.matchMedia(breakpoint)),
      pluck('matches')
    );
}
