import { Component } from '@angular/core';
import { faqs } from '../../data/faqs';
import { FaqsModel } from '../../models/faqs.models';

@Component({
  selector: 'app-faqs',
  imports: [],
  templateUrl: './faqs.html',
  styleUrl: './faqs.css'
})
export class Faqs {
  public faqs: FaqsModel[] = faqs;
}
