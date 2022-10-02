import { AutenticaService } from './../../services/autentica.service';
import { LoginService } from './../../services/login.service';
import { LoginModel } from './../../models/LoginModel';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router, public loginService : LoginService,
    private autenticaService: AutenticaService) { }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required]]
      }
    );
  }

  submitLogin() {
    var dadosLogin = this.loginForm.getRawValue() as LoginModel;

    this.loginService.LoginUsuario(dadosLogin)
    .subscribe({
      next: (token) => {
        this.autenticaService.DefineToken(token)
        this.router.navigate(["/noticias"]);
      },
      error: (error) => {

      }
    })


  }

}
