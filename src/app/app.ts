import { Component, OnInit } from '@angular/core';
import { TitleComponent } from './components/title/title';
import { Info } from './components/info/info';
import { Pains } from './components/pains/pains';
import { Footer } from './components/footer/footer';
import { TwsCreator } from './components/tws-creator/tws-creator';
import { Donations } from './components/donations/donations';
import { Faqs } from './components/faqs/faqs';
import { Contact } from './components/contact/contact';
import { CardText, CardTextAndDetails } from './models/cardTexts.models';
import { pricesCards, reasonsCards } from './data/cardTexts';

@Component({
  selector: 'app-root',
  imports: [TitleComponent, Info, Pains, Footer, TwsCreator, Donations, Faqs, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  public reasonsCards: CardText[][] = reasonsCards;
  public pricesCards: CardTextAndDetails[] = pricesCards;
  public pricesCardsTexts: CardText[][] = [];
  public content: string = '';

  ngOnInit() {
    this.pricesCards.map((priceCard) => this.pricesCardsTexts.push(priceCard.text));
  }
}
