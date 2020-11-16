import { Component,  } from '@angular/core';
import { GithubService} from '../github-repos.service';

@Component({
  moduleId: module.id,
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent {
    user:any;
  constructor(private _githubService:GithubService) {
    this._githubService.getUser().subscribe(user =>{
      this.user = user;
      console.log(this.user);
    })
   }
  }

