import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CardText, CardTextAndDetails } from '../../models/cardTexts.models';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card implements OnInit {
  @Input() cardClass: string = '';
  @Input() cardContent: CardText[] | CardTextAndDetails | null = null;

  public cardText: CardText[] = [];
  public cardDetails: string[] = [];
  ngOnInit() {
    this.getCardText();
  }
  public getCardText() {
    if (this.cardClass === 'price-card') {
      this.cardText = (this.cardContent as CardTextAndDetails).text;
      this.cardDetails = (this.cardContent as CardTextAndDetails).details;
    } else {
      this.cardText = this.cardContent as CardText[];
    }
  }
}
