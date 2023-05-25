import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myform';
  myForm: any;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required, ],
      Lname: ['', Validators.required, ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submitForm() {
    if (this.myForm.valid) {
      // Form is valid, perform desired actions
      console.log(this.myForm.value);
      
    } else {
      // Form is invalid, display error messages
      console.log('Form is invalid.');
    }
  }
  
  
}
