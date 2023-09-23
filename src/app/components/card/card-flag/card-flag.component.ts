import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-flag',
  templateUrl: './card-flag.component.html',
  styleUrls: ['./card-flag.component.css']
})
export class CardFlagComponent implements OnInit {

  @Input()
  gameLabel:string = '';
  constructor(){}

  ngOnInit(): void {
      
  }

}
