import {Component, OnInit} from '@angular/core';
import {IComment} from "../../../interfaces/comment.interface";
import {PostService} from "../../../services/post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{

  comment: IComment[]
  constructor(readonly postService:PostService, readonly activatedRoute:ActivatedRoute) {
  }

  ngOnInit() :void {
    this.activatedRoute.params.subscribe(({postId}) => {
      this.postService.getCommentById(postId).subscribe(value => this.comment = value)
    })
  }

}
