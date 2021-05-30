import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  getAuthors() {
    return ["author1", "author2", "author3"];
  }

  // Por ahora no nos hace falta el constructor
  // constructor() { }
}
