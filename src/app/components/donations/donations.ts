import { Component } from '@angular/core';

@Component({
  selector: 'app-donations',
  imports: [],
  templateUrl: './donations.html',
  styleUrl: './donations.css'
})
export class Donations {
  textVisiblity: boolean = true;
  infoButtonText: string = '+Info';

  showText() {
    this.textVisiblity = !this.textVisiblity;
    if (this.infoButtonText === '+Info') {
      this.infoButtonText = '-Info';
    } else {
      this.infoButtonText = '+Info';
    }
  }
}
