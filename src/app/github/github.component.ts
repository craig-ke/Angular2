import { Component  } from '@angular/core';
import { GithubRepoService} from '../github-repos.service';

@Component({
  // moduleId: module.id,
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent {
    user:any;
    repos:any;
    username:any;

  constructor(private _githubService:GithubRepoService) {
    this.user=false;

   }
   search(){
     this._githubService.updateUsername(this.username);

     this._githubService.getGithubPublicUser().subscribe(user =>{
      this.user = user;
    });
    this._githubService.getGithubPublicRepositories().subscribe(repos =>{
      this.repos= repos;
    });
   }
  }


