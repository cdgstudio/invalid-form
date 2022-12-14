import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenAsyncValidator } from './async.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({
    email: new FormControl('example@text.com', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)], [forbiddenAsyncValidator]),
  });

  onSubmit() {
    alert('Submitted');
  }
}
