import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizDataService {

  quizData: any;

  constructor(private http: HttpClient) { }

  getQuizData(){
    if (this.quizData == undefined || this.quizData == null)
      this.quizData = this.http.get('https://opentdb.com/api.php?amount=10');

    return this.quizData;
  }
}
