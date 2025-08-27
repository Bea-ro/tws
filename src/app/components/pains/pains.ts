import { Component, Input } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-pains',
  imports: [Button],
  templateUrl: './pains.html',
  styleUrl: './pains.css'
})
export class Pains {
  @Input() sectionIntro: string = '';
  @Input() sectionAnswear: string = '';
}
