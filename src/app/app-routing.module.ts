import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {QuizComponent} from './quiz/quiz.component';
import {QuestionDetailsComponent} from './question-details/question-details.component';

//array of objects that specify the routes
//path: the url, an empty one indicates the first screen
//component: the component that should be displayed

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'quiz',
    component: QuizComponent
  },
  {
    path: 'details', 
    component: QuestionDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
