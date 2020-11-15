import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/Http'; 

@Injectable({
  providedIn: 'root'
})
export class GithubReposService {

  constructor(private http: HttpClient) { }

  getRepo(){
    return this.http.get( 'https://api.github.com/users/${craig-ke}/repos');
  }
}
