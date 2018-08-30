import { Component, OnInit } from '@angular/core';
import {QuizDataService} from '../quiz-data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions : Object;

  constructor(private data: QuizDataService) { }

  ngOnInit() {    
    this.data.getQuizData().subscribe(
    data => this.questions = data
    );     
  }

}
