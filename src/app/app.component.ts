import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CalculatorService]
})
export class AppComponent {
  title = 'projekt_kompo';
  xEksport: string[] = ['17:00','szkołą']
  sonAnswer(granted: string) {
    alert(granted);
  }

  constructor(kalk: CalculatorService) {
    this.addition = kalk.addition(2,5,1,2,3,54,1);
    this.subtraction = kalk.subtraction(50,20,12,5);
    this.multiplication = kalk.multiplication(2,3,4,5);
    this.division = kalk.division(200,5,10);
  }

  addition: number = 0;
  subtraction: number = 0;
  multiplication: number = 0;
  division: number = 0;
}
