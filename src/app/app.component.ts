import { Component} from '@angular/core';
import { GithubService } from './github-repos.service';
import {GithubComponent} from './github/github.component';
import {HttpClientModule} from  '@angular/common/http/http';
@Component({
  moduleId:module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  directives:[GithubComponent],
  providers:[HttpClientModule ,GithubService]
})
export class AppComponent {}
 
