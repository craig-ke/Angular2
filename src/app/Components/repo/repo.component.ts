import { Component, OnInit } from '@angular/core';
import { GhUsers }from '../../models/gh-users';
import { GhRepo }from '../../models/gh-repo';
import { GhServiceService } from '../../service/gh-service.service';
@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  userUsers = true;

  githubUsers: GhUsers;
  githubRepos: GhRepo;
  userName: string;

  constructor(public githubUserServive: GhServiceService, private githubRepoServive: GhServiceService) { }

  search(userName) {
    this.githubRepoServive.getRepo(userName).then((results) => {
      this.githubRepos = this.githubRepoServive.updateRepo;
    },
      (error) => {
        console.log(error);
      })
    
  }

  ngOnInit() {
    this.search('JeremiahNgige');
  }

}
