import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  userName: string
  @Output() userUpdated = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {

  }
  //the search fx for the event emitter
  search() {
    this.userUpdated.emit(this.userName);
    this.userName = '';
  }

}
