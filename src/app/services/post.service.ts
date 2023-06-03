import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment, IPost} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(readonly httpClient:HttpClient) { }

  getAll(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts.full)
  }

  byId(id: number): Observable<IPost>{
    return this.httpClient.get<IPost>(urls.posts.byId(id))
  }

  getAllCommentsById(id: number): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(urls.posts.CommentById(id))
  }
}

