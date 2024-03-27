import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  addition(...digits: number[]): number{
    let result = 0;
    for(let x of digits){
      result += x;
    }
    return result;
  }

  subtraction(...digits: number[]): number{
    let x = digits[0];
    for(let y = 1; y<digits.length; y++){
      x = x - digits[y];
    }
    return x;
  }

  multiplication(...digits: number[]): number{
    let wynik = 1;
    for(let f of digits){
      wynik *= f;
    }
    return wynik;
  }

  division(...digits: number[]): number{
    let wynik = digits[0];
    for(let f = 1; f<digits.length; f++){
      wynik = wynik / digits[f];
    }
    return wynik;
  }

}
