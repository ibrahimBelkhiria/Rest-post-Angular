import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  title: string ;
  description: string;
  errors= [];


  constructor(private _postService: PostService , private router: Router) { }

  addPost(title, description) {

    let post: any;
    post = {title: title, description: description};
    this._postService.addPost(post).subscribe(( result => {

      this.router.navigate(['/posts']);

    }), addError => this.errors = addError);

  }





  ngOnInit() {
  }

}
