import {Component, OnInit} from '@angular/core';
import {PostService} from "../../../../services";
import {ActivatedRoute} from "@angular/router";
import {IComment} from "../../../../interfaces";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{

  comments: IComment[]
  constructor(private postService:PostService, private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.postService.getAllCommentsById(id).subscribe(value => this.comments = value)
    })
  }


}
