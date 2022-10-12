import { NoticiaViewModel } from './../../models/NoticiaViewModel/NoticiaViewModel';
import { Router } from '@angular/router';
import { NoticiaService } from './../../services/noticia.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  constructor(private noticiaService: NoticiaService, private router: Router) { }

  noticias!: Array<NoticiaViewModel>

  ngOnInit(): void {
    this.ListarNoticiasCustomizada();

  }

  ListarNoticiasCustomizada() {
    this.noticiaService.ListarNoticiasCustomizada()
    .subscribe({
      next: (noticias) => {
        this.noticias = noticias;
      },
      error: () => {
        this.router.navigate(["/login"]);
      }
    })
  }

  // ListarNoticias() {
  //   this.noticiaService.ListarNoticias()
  //   .subscribe({
  //     next: (noticias) => {
  //       this.noticias = noticias;
  //     },
  //     error: () => {
  //       this.router.navigate(["/login"]);
  //     }
  //   })
  // }
}
