import { Component, Input } from '@angular/core';

@Component({
  selector: 'synek',
  templateUrl: './syn.component.html',
  styleUrls: ['./syn.component.css']
})
export class SynComponent {
  @Input() xImport!: string[];    // przechowuje dane zmiennej xEksport
}
