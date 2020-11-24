import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wahlomat-ergebniss',
  templateUrl: './ergebniss.component.html',
  styleUrls: ['./ergebniss.component.css']
})
export class ErgebnissComponent implements OnInit {
  public barchartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    offset:false
  };
  public ChartLabels = ['Zendesk', 'BSC', 'OTRS', 'JIRA', 'Mantis', 'Redmine'];
  public CharType = 'bar';
  public ChartLegend = true;
  public ChartData = [
    { data: [65, 50, 80, 81, 56, 55], label: 'Preis' },
    { data: [0, 30, 50, 89, 86, 27], label: 'Support' },
    { data: [28, 48, 4, 19, 70, 5], label: 'Sprache' },
    { data: [5, 1, 65, 19, 60, 2], label: 'Technische Background' },
    { data: [89, 48, 1, 19, 20, 70], label: 'Einsatzgebiet' },
    { data: [80, 85, 60, 30, 60, 66], label: 'Prozent%' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
