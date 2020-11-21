import { Component, Output, EventEmitter } from '@angular/core';
import { GalaxyService } from 'src/app/service/galaxy.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  constructor(private service: GalaxyService) {}

  public distance;

  // Event Emitter for passing search results
  @Output() onSearch = new EventEmitter();

  error = 'The distance should be greater than zero';

  // Retrieve the battleships from the API
  getSpaceships(distance) {
    // Validating the distance is given properly
    if (this.distance <= 0 || this.distance == undefined) {
      return this.error;
    } else {
      this.service.calculatedStops(distance).then((stops) => {
        // Emit search results
        this.onSearch.emit(stops);
      });
    }
  }
}
