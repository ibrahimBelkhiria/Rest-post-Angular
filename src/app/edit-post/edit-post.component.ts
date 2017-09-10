import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../post.service';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  public id: number;
  title: string;
  description: string;
  errors= [];

  constructor(private router: Router , private route: ActivatedRoute, private _postService: PostService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
  }

  editPost(title, description) {
    let post: any;
    post = {title: title, description: description};
    this._postService.updatePost(post, this.id).subscribe(( result => {

      this.router.navigate(['/posts']);

    }), editError => this.errors = editError);


  }

}
