import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable({
    providedIn: 'root'
})
export class DataService {
    // private url = 'https://jsonplaceholder.typicode.com/posts';

    // inject http
    constructor(private url: string, private http: Http) { }

getAll() {
    return this.http.get(this.url)
      .catch(this.handleError); // Get the data
}

create(resource) {
  // Hacemos este cambio para que el error
  // se vea más rápido
  // throw se usa para lanzar Observable, en este caso con un error
  // return Observable.throw(new AppError());

    return this.http.post(this.url, JSON.stringify(resource))
        .catch(this.handleError);
}

update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
    .catch(this.handleError);
}

delete(id) {
  // Comprobamos que envía bien el mensaje de error:
  // return Observable.throw(new AppError());

    return this.http.delete(this.url + '/' + id)
      .catch(this.handleError); // No llamamos al método, si no que le pasamos un referencia
}

  // Lo ponemos privado porque no queremos que los consumidores
  // de esta web sepan la existencia de este método
  // Es decir, que no queremos que otras clases que no
  // sea esta llamen a este método
private handleError(error: Response) {
    if (error.status === 400) {
        return Observable.throw(new BadInput(error.json()));
    }

    if (error.status === 404)
        return Observable.throw(new NotFoundError());
        
    return Observable.throw(new AppError(error));
    }

}





// Del tutorial
// data.service.ts
/*import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {
  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url)
      .map(response => response.json())
      .catch(this.handleError);
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
      .map(response => response.json())
      .catch(this.handleError);
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .map(response => response.json())      
      .catch(this.handleError);
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .map(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));
  
    if (error.status === 404)
      return Observable.throw(new NotFoundError());
    
    return Observable.throw(new AppError(error));
  }
}*/
