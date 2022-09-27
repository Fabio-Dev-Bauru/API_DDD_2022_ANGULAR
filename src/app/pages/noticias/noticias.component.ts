import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  constructor() { }

  listaNoticias!: Array<number>;

  ngOnInit(): void {
    var lista = new Array<number>();
      for (let i = 0; i < 12; i++) {
        lista.push(i);
      }

      this.listaNoticias = lista;
  }

}
