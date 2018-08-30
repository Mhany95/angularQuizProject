import { Component, OnInit, Input } from '@angular/core';
import {QuestionManagerService} from '../question-manager.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question: Object;

  constructor(private questionManagerIns : QuestionManagerService, private router: Router) { }

  ngOnInit() {
  }

  routeToQuestionDetails(){
    //setting the 'question' object in the manager instance
    this.questionManagerIns.setSelectedQuestion(this.question);
    this.router.navigate(['/details']);
  }

}
