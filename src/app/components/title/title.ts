import { Component } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-title',
  imports: [Button],
  templateUrl: './title.html',
  styleUrl: './title.css'
})
export class TitleComponent {}
