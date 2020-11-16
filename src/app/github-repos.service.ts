import { Injectable } from '@angular/core'; 
import {HttpClientModule, HttpHeaders} from  '@angular/common/http';
import'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username='craig-ke';

  constructor(private _http:HttpClientModule){
    console.log('Github service has started ..... ');
  }
  getUser(){
    return this._http.get('https://api.github.com/users/'+ this.username);
       .map(res => res.json());
  }
}

