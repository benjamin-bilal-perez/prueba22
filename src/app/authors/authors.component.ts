import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors; // Aquí tendremos la lista de autores

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }

  ngOnInit(): void {
  }

}
