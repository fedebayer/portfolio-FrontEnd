import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/model/login-user';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loginUser!: LoginUser;
  email!: string;
  password!: string;
  errMsj!: string;

  constructor(
    private formBuilder: FormBuilder,
    private tokenService: TokenService,
    private authService: AuthService,
    private route: Router
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {}

  onLogin(): void {
    this.loginUser = new LoginUser(
      this.getEmail().value,
      this.getPassword().value
    );
    this.authService.login(this.loginUser).subscribe({
      next: (data) => {
        this.tokenService.setToken(data.token);
        this.route.navigate(['']);
        setTimeout(this.reloadPage, 10);
      },
      error: (err) => {
        this.errMsj = err.error.message;
        console.log(this.errMsj);
      },
    });
  }

  get Email() {
    return this.form.get('email');
  }
  get Password() {
    return this.form.get('password');
  }

  getEmail(): string | any {
    return this.form.get('email');
  }
  getPassword(): string | any {
    return this.form.get('password');
  }

  reloadPage(): void {
    window.location.reload();
  }
}
