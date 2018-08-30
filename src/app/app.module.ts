import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import {QuestionManagerService} from './question-manager.service';

@NgModule({
  //declarations reference our custom made components
  declarations: [
    AppComponent,
    QuestionComponent,
    HomeComponent,
    QuizComponent,
    QuestionDetailsComponent
  ],
  //imports are for angular (and libs?)
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  //used to import services/ managers that are injectable
  providers: [QuestionManagerService],
  //main component
  bootstrap: [AppComponent]
})
export class AppModule { }
