import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionManagerService {

  selectedQuestion : Object;

  constructor() { }

  setSelectedQuestion(question: Object){
    this.selectedQuestion = question;
  }

  getSelectedQuestion(){
    return this.selectedQuestion;
  }
}
