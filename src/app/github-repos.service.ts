import { Injectable } from '@angular/core'; 
import { HttpBackend, HttpClient, } from '@angular/common/http';
import'rxjs/add/operator/map'
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username='craig-ke';
  private client_secret = 'd58b679e393bb08b25b51a91278eaf3f81455c4';


  constructor(private _http:HttpClient){
    console.log('Github service has started ..... ');
  }
  getUser(){
    return this._http.get<Data>('https://api.github.com/users/'+this.username+'&client_secret='+this.client_secret)
        // .map(res => res.json());
}

 getRepos(){
    return this._http.get<Data>('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_secret)
        // .map(res => res.json());
}

updateUsername(username:string){
    this.username = username;
}
}

