import { Component, Input } from '@angular/core';
import { Button } from '../button/button';
import { Card } from '../card/card';
import { CardText, CardTextAndDetails } from '../../models/cardTexts.models';

@Component({
  selector: 'app-info',
  imports: [Button, Card],
  templateUrl: './info.html',
  styleUrl: './info.css'
})
export class Info {
  @Input() infoIntro: string = '';
  @Input() infoAnswear: string = '';
  @Input() cardsContent: CardText[][] | CardTextAndDetails[] = [];
  @Input() content: string = '';
}
