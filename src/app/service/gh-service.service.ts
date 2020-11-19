import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment }from '../../environments/environment';
import { GhUser } from '../Models/gh-user';
import { GhRepo } from '../Models/gh-repo';

@Injectable({
  providedIn: 'root'
})
export class GhServiceService {
  updateUsers: GhUser;
  updateRepo: GhRepo;
  access_token: string = environment.access_token;

  constructor(private http: HttpClient) {
    this.updateUsers = new GhUser('', '', '', '', '', '', 0, 0, 0, new Date());
    this.updateRepo = new GhRepo('', '', '', new Date(), 0, 0, '');
  }

  //this gets user info of userName typed
  getUser(userName: string) {
    interface GithubUserResponse {
      url: string;
      name: string;
      email: string;
      login: string;
      html_url: string;
      location: string;
      public_repos: number;
      followers: number;
      following: number;
      avatar_url: string;
      created_at: Date;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<GithubUserResponse>('https://api.github.com/users/' + userName + '?access_token=' + environment.access_token).toPromise().then((result) => {
        this.updateUsers = result;
        console.log(this.updateUsers);

        resolve();
      },
        error => {
          alert('There seems to be a problem');
          console.log(error)

          reject();
        })
    })
    return promise
  }

  //fetch repo data
  getRepo(userName) {
    interface GithubRepoResponse {
      name: string;
      html_url: string;
      description: string;
      forks: number;
      watchers_count: number;
      language: string;
      created_at: Date;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<GithubRepoResponse>('https://api.github.com/users/' + userName + '/repos?access_token=' + environment.access_token).toPromise().then((result) => {
        this.updateRepo = result;
        console.log(this.updateRepo);

        resolve();
      },
        error => {
          console.log(error)

          reject();
        })
    })
    return promise
  }
}
