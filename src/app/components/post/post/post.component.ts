import {Component, Input, OnInit} from '@angular/core';
import {IPost, IUser} from "../../../interfaces";
import {UserService} from "../../../services";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  @Input()
  post: IPost;

  user: IUser;

  constructor(readonly userService:UserService, readonly router:Router, readonly activatedRoute:ActivatedRoute) {
  }
  ngOnInit() {
  }

  showAuthor() {
    this.userService.getById(this.post.userId).subscribe(value => this.user = value)
  }

  showComments() {
    this.router.navigate([this.post.id],{relativeTo: this.activatedRoute})
  }
}
