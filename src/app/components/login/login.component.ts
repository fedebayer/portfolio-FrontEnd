import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, /*private authenticationService: AuthenticationService, private route: Router*/) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      //possible that I need to change this to something similar/or change the values
      deviceInfo: this.formBuilder.group({
        deviceId: ["17867868768"],
        deviceType: ["DEVICE_TYPE_ANDROID"],
        notificationToken: ["6765757Seececc34"]
      })
    })
  }

  ngOnInit(): void {
  }

  get Email() {
    return this.form.get('email');
  }
  get Password() {
    return this.form.get('password');
  }
  /*
    onSend(event: Event) {
      event.preventDefault();
      this.authenticationService.startSession(this.form.value).subscribe(data => {
        console.log("DATA:" + JSON.stringify(data));

      })
    }*/

}
