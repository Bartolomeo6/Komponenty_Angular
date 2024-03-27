import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projekt_kompo';
  xEksport: string[] = ['17:00','szkołą']
  sonAnswer(granted: string) {
    alert(granted);
  }
}
