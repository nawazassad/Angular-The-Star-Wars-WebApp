import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-star-ships',
  templateUrl: './display-star-ships.component.html',
  styleUrls: ['./display-star-ships.component.scss'],
})
export class DisplayStarShipsComponent {
  @Input() battleship;

  constructor() {}
}
