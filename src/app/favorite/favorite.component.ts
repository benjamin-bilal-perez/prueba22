import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorite', // Define el nombre de la etiqueta
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorite: boolean; // input propertie (deafult value = false)

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }

}
