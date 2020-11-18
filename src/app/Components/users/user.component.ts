import { Component, OnInit } from '@angular/core';
import { GhUsers }from '../../Models/gh-user';
import { GhRepo }from '../../Models/gh-repo';
import { GhServiceService } from '../../service/gh-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  searchUsers = true;

  githubUsers: GhUsers;
  githubRepos: GhRepo;
  userName: string;

  constructor(private githubUserServive: GhServiceService, private githubRepoServive: GhServiceService) { }

  search(userName) {
    this.githubUserServive.getUser(userName).then((success) => {
      this.githubUsers = this.githubUserServive.updateUsers;
    },
      (error) => {
        alert("username not found");
        console.log(error)
      })

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
