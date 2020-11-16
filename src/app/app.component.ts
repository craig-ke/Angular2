import { OnInit} from '@angular/core';
import { Component } from '@angular/core';
import { GithubReposService } from './github-repos.service';
import { Subscription } from 'rxjs'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  providers : []
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Git-Project';

  gitHubRepos: any = [];
  mysubscriptions: Subscription;

  constructor(private gitHubService:GithubReposService){
  }
  ngOnDestroy():void{
    this.mysubscriptions.unsubscribe();
  } 
  ngOnIt(): void {
    this.getRepos();

  }

  getRepos(){
    this.gitHubService.getGithubPublicRepositories().subscscribe(repos=>{
      this.gitHubRepos=repos;
      console.log(JSON.stringify(this.gitHubRepos));
    })
  }
}
