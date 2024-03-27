import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'synek',
  templateUrl: './syn.component.html',
  styleUrls: ['./syn.component.css']
})
export class SynComponent {
  @Input() xImport!: string[];    // przechowuje dane zmiennej xEksport
  @Output() answer = new EventEmitter<string>;
  sendMessage() {
    this.answer.emit('Będę czekał')
  }

  
}
