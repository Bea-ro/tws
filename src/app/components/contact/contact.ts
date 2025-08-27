import { Component, Input } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-contact',
  imports: [Button],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  @Input() sectionIntro: string = '';
  @Input() sectionAnswear: string = '';
}
