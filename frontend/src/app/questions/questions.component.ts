import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wahlomat-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  //categories = [Preis, Support, Sprache, technischer_Background, Einsatzgebiet] //das wären jeweils Objekte aus der db?

  constructor() { }

  ngOnInit(): void {
  }

}
