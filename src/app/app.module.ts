import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {GithubRepoService} from '../app/github-repos.service';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GithubRepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

 