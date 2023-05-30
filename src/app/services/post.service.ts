import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../interfaces";
import {urls} from "../constants";
import {IComment} from "../interfaces/comment.interface";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(readonly httpClient:HttpClient) { }

  getAll(): Observable<IPost[]> {
   return this.httpClient.get<IPost[]>(urls.posts.posts)
  }

  getCommentById(id:number): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(urls.posts.CommentById(id))
  }
}
