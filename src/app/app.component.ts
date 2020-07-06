import { Component, OnInit } from '@angular/core';

import { ResizeService } from './resize.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  $resize!: Observable<any>;

  constructor(private resizeService: ResizeService) { }

  ngOnInit(): void {
    this.$resize = this.resizeService.$resize;
  }
}
