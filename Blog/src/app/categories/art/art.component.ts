import { CommonModule} from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-art',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './art.component.html',
  styleUrl: './art.component.css'
})
export class ArtComponent {
  @Input() imageUrl!: string;
  @Input() text!: string;
  @Output() textClicked: EventEmitter<string> = new EventEmitter<string>();

  redirectToBlogPage() {
    // Emit the text value to the parent component
    this.textClicked.emit(this.text);
  }

}
