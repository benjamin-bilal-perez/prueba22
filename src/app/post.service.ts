import { DataService } from './services/data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {
  // private url = 'https://jsonplaceholder.typicode.com/posts';

  // inject http
  constructor(http: Http) { 
    super('https://jsonplaceholder.typicode.com/posts', http);
  }
}
