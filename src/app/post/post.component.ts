import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

     posts: Array<Post>= [] ;
     errorMessage: string;
  constructor(private _postService: PostService) { }

  getPosts() {
    this._postService.getPosts().subscribe(
      posts => this.posts = posts, error => this.errorMessage = <any> error
    );
  }

  ngOnInit() {
    this.getPosts();
  }

  deletePost(id) {
    this._postService.deletePost(id).subscribe(
     result => {
       window.location.reload();
     }
    );
  }

}
