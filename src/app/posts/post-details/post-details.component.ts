import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map ,switchMap } from 'rxjs/operators';
import { combineLatest} from 'rxjs';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postId: string | null;
  post: any;
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.postId = this.route.snapshot.paramMap.get('postId');
   }

  ngOnInit() {
    if(this.postId) {
      combineLatest(
      this.http.get(`https://jsonplaceholder.typicode.com/users`),
      this.http.get(`https://jsonplaceholder.typicode.com/posts/${+this.postId + 1}`)
      ).subscribe(response => {
         const users = response[0] as Array<any>;
         const posts: any = response[1];
          this.post = {
            ...posts,
            user: users.find(user=> user.id === posts.userId)
          }
      });
    }
   
  }

  goBackToList() {
    this.router.navigate(['/posts'])
  }

}