import {Component, Input, OnInit} from '@angular/core';
import {IComment} from "../../interfaces/comment.interface";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{
@Input()
postId!: number;
comments!: IComment[];
  constructor(readonly commentService:CommentService) {
  }

  ngOnInit() {
    this.commentService.getCommentsByPostId(this.postId).subscribe(value => this.comments = value)
  }
}
