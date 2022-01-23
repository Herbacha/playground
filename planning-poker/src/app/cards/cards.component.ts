//import { Component, OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  constructor() { }

  currentlySelectedCard: string | undefined;
  selectedCardIsShown: boolean = true;
  autoHideSelectedCard: boolean = false;

  cards: string[] = ['0', '½', '1', '2', '3', '5', '8', '13', '20', '40', '100', '?', '☕'];

  onChange($event: MatSlideToggleChange): void {
    this.autoHideSelectedCard = $event.checked;
  }

  select(cardFace: string) {
    this.currentlySelectedCard = cardFace;
    this.selectedCardIsShown = !this.autoHideSelectedCard;
  }

  reinitCards(): void {
    this.currentlySelectedCard = undefined;
  }
  toggleCard(): void {
    this.selectedCardIsShown = !this.selectedCardIsShown;
  }

  inSingleCardMode(): boolean {
    return this.currentlySelectedCard != undefined;
  }

  getHiddenStatus(cardFace: string): boolean {
    if (this.inSingleCardMode() || (this.currentlySelectedCard == cardFace && this.selectedCardIsShown))
      return false;
    return true;
  }

}
