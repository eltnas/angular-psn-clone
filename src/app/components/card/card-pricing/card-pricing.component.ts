import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {

  @Input()
  gameType:string = "";
  @Input()
  gameValue:string = "";
  @Input()
  gameCall:string = "";

  constructor(){}

  ngOnInit():void{

  }
}
