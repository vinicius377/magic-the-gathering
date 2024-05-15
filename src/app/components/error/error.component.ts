import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { formatterErrorMessage } from './utils/fomatterErrorMessage';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {
  @Input()
  error = ''
  errorMessage = formatterErrorMessage(this.error)

  ngOnChanges(x: any){
    this.errorMessage = formatterErrorMessage(x.error.currentValue)
  }

}
