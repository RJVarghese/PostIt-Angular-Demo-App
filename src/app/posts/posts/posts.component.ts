import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts$: Observable<any> = of([]);
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.posts$ = this.http
    .get<any>(`https://jsonplaceholder.typicode.com/posts`)
  }

  goToDetails(postId: number) {
    this.router.navigate(['/posts', postId])
  }

}