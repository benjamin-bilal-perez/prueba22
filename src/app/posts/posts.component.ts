import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../post.service';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts', // Recordemos ponerle el nombre de la etiqueta correctamente
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  
  constructor(private service: PostService) {
  }

  ngOnInit() {
      this.service.getAll()
      .subscribe(response => {
        this.posts = response.json();
      });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    // Optimistic update:
    // Primero añadimos la fila
    this.posts.splice(0, 0, post); // add to the beginning of the list
    input.value = '';

    // Después llamamos al servidor
    this.service.create(post)
      .subscribe(response => {
        post['id'] = response.json().id;
        // this.posts.splice(0, 0, post); // add to the beginning of the list
        console.log(response.json());
      }, 
        (error: AppError) => {
          // Este error lo ponemos después de poner el
          // optimistic update
          this.posts.splice(0, 1);

          if (error instanceof BadInput) {
            // Lo dejamos comnetado porque todavía no
            // tenemos nungún formulario
            // this.form.setErrors(error.originalError);
          } else throw error;
      });
  }

  updatePost(post) {
    // patch
    this.service.update(post)
      .subscribe(response => {
        console.log(response.json());
      });
  }

  deletePost(post) {
    // Optimistic response
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(null,
        (error: AppError) => {
          // Añadimos lo que borramos si se produce algún fallo 
          this.posts.splice(index, 0, post)

          if (error instanceof NotFoundError) {
            alert("This post has already been deleted");
          } else throw error;
        });
  }
}






// Del tutorial:
// post.component.ts
/*import { NotFoundError } from './../common/not-found-error';
import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id;
            this.posts.splice(0, 0, post);
          },
          (error: AppError) => {
            if (error instanceof BadInput) {
              // this.form.setErrors(error.originalError);
            }
            else throw error;
          });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        });
  }

  deletePost(post) {
    this.service.delete(post.id)
      .subscribe(
        () => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError)
            alert('This post has already been deleted.');
          else throw error;
        });
  }
}*/

