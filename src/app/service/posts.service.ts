import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from "./auth.service";
import {environment } from '../../environments/environment'

@Injectable({providedIn: 'root'})
export class PostsService {
  constructor(private httpClient: HttpClient,private AuthService :AuthService) { }
  token:any = this.AuthService.GetToken();
  header = new HttpHeaders({
    'x-access-token':this.token
  })
  GetPosts() {
     return  this.httpClient.get(environment.apiURL+'/'+'posts',{headers:this.header});
  }

  SavePost(Post:any) {
    return  this.httpClient.post(environment.apiURL+'/'+'posts/addpost',Post,{headers:this.header});
  }

  UpdatePost(Post:any) {
    return  this.httpClient.put(environment.apiURL+'/'+'posts/updatepost',Post,{headers:this.header});
  }

  DeletePost(Id:any) {
    return  this.httpClient.delete(environment.apiURL+'/'+`posts/${Id}`,{headers:this.header});
  }
  
}