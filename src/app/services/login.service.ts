import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable(
  {
    providedIn: "root"
  }
)

export class LoginService{

  constructor(private httpClient: HttpClient) {

  }

  private readonly baseURL = environment["endpoint"];

  LoginUsuario(objeto:any) {
    return this.httpClient.post<any>
        (`${this.baseURL}/CriarTokenIdentity/`, objeto);
  }

}
