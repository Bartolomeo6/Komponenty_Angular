import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'coreczka_troll',   // zagnieżdżanie 
  templateUrl: './corka.component.html',
  styleUrls: ['./corka.component.css']
})
export class CorkaComponent {
  addition: number = 0;

  constructor(cal: CalculatorService) {
    this.addition = cal.addition(91,1,232);
  }
}
