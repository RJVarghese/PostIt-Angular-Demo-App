import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostsRoutingModule } from './posts.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PostDetailsComponent } from './post-details/post-details.component';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PostsComponent, PostDetailsComponent],
})
export class PostsModule { }