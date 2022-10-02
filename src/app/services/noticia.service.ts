import { environment } from './../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})



export class NoticiaService {

  constructor(private httpClient: HttpClient) {

  }

  private readonly baseURL = environment["endpoint"];

  ListarNoticias() {
    return this.httpClient.post<any>
        (`${this.baseURL}/ListarNoticias/`, null);
  }

}
