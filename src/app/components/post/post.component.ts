import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../interfaces";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  @Input()
  post!: IPost;

  postId!: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  showComments() {
    this.postId = this.post.id
  }
}
