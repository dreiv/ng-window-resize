import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { BreakpointService, Breakpoint } from './breakpoint.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  isPhone$!: Observable<boolean>;

  constructor(private breakpointService: BreakpointService) {}

  ngOnInit(): void {
    this.isPhone$ = this.breakpointService.is$(Breakpoint.PHONE);
  }
}
