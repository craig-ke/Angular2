import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { GithubRepoService } from './github-repos.service';

@Component({
    // moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.css'],
    providers: []
})
export class AppComponent implements OnInit { 
 title ='Git-Project';

 gitHubRepos: any = [];
 constructor(private gitHubService:GithubRepoService){
  this.getRepos();
 }
 ngOnInit():void{
     this.getRepos();
 }

  getRepos(){
      this.gitHubService.getGithubPublicRepositories().subscribe(repos => {
          this.gitHubRepos =repos;
          console.log(JSON.stringify(this.gitHubRepos))
      });
  }
}
