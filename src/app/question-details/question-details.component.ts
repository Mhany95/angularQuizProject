import { Component, OnInit } from '@angular/core';
import {QuizDataService} from '../quiz-data.service';
import {ActivatedRoute} from "@angular/router"
import {QuestionManagerService} from '../question-manager.service'

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {

  question: any;
  answers: String[]; //the api I used separated the correct answer from the incorrect answers, I'm grouping them here

  constructor(private questionManagerIns: QuestionManagerService) { 
    //getting the stored 'question' object in the manager
    this.question = questionManagerIns.getSelectedQuestion();
    this.answers = [];
    if (this.question !== undefined)
    {
      this.answers.push(this.question.correct_answer);
      this.question.incorrect_answers.forEach(element => {
        this.answers.push(element)
      });
    }
  }

  ngOnInit() {
  
  }
 
}
