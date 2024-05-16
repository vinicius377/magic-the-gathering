import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { formatterErrorMessage } from './utils/fomatterErrorMessage';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent implements OnChanges {
  @Input()
  error = ''
  errorMessage = formatterErrorMessage(this.error)

  ngOnChanges(x: SimpleChanges){
    this.errorMessage = formatterErrorMessage(x['error'].currentValue)
  }

  reloadPage() {
    window.location.reload();
  }

  goToBack() {
    window.history.back();
  }
}
