import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-arrow-back',
  standalone: true,
  imports: [MatIconModule, RouterModule],
  templateUrl: './arrow-back.component.html',
  styleUrl: './arrow-back.component.scss'
})
export class ArrowBackComponent {
  @Output()
  onClick = new EventEmitter();

  handleClick() {
    this.onClick.emit()
  }

  handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.onClick.emit()
    }
  }
}
