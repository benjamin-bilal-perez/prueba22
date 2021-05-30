import { AppError } from './common/app-error';
import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './common/app-error-handler';
// import { PostService } from './post.service';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthorsService } from './authors.service';
import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { FormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { AuthorsComponent } from './authors/authors.component';
import { TitleCasePipe } from './title-case.pipe';
import { PostsComponentComponent } from './posts-component/posts-component.component';
import { PostsComponent } from './posts/posts.component';
import { HttpModule } from '@angular/http';
import { GithubFollowersComponent } from './github-followers/github-followers.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    AuthorsComponent,
    TitleCasePipe,
    PostsComponentComponent,
    PostsComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    // We have to add this because the injection work
    // PostService,
    CoursesService,
    AuthorsService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
