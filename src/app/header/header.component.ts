import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() nameSelected = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(name: string) {
    this.nameSelected.emit(name)
  }
}
