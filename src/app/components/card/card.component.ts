import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  gameImage:string="";
  @Input()
  gameLabel:string="";
  @Input()
  gameType:string="";
  @Input()
  gameCall:string="";
  @Input()
  gameValue:string="";
  constructor(){}
  ngOnInit(): void {
      
  }

}
