import { Component, OnInit } from '@angular/core';

import { BreakpointService, Breakpoint } from './breakpoint.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  isPhone$!: Observable<any>

  constructor(private breakpointService: BreakpointService) { }

  ngOnInit(): void {
    this.isPhone$ = this.breakpointService.is$(Breakpoint.PHONE);
  }
}
