import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; //newly added
import { HttpModule } from '@angular/http'; //newly added
import { GithubService } from './github.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //newly added
    HttpModule //newly added
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
