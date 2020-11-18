import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './Components/users/user.component';
import { RepoComponent } from './Components/repo/repo.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SearchComponent } from './Components/search/search.component';
import { ErrorpageComponent } from './Components/errorpage/errorpage.component';
import { DateAgoPipe } from './pipe/date-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RepoComponent,
    NavbarComponent,
    SearchComponent,
    ErrorpageComponent,
    DateAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
