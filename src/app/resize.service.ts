import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {

  constructor() { }

  $resize = fromEvent(window, 'resize').pipe(
    map(() => window.innerWidth),
    startWith(window.innerWidth)
  );
}
