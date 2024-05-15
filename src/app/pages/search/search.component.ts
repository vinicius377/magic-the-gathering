import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})

export class SearchComponent {
  constructor(private router: Router) { }

  searchParams!: FormGroup
  blockOptions = ['Amonkhet', 'Ixalan', 'Zendikar', 'Ravnica', 'Onslaught'];

  onSubmit() {
    if (this.searchParams.invalid) return
    this.router.navigate(['sets'], { queryParams: this.searchParams.value });
  }

  ngOnInit() {
      this.searchParams = new FormGroup({
        name: new FormControl(''),
        block: new FormControl('', [Validators.required])
      })
  }
}
