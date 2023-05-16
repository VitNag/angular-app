import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-swapi',
  templateUrl: './swapi.component.html',
  styleUrls: ['./swapi.component.css']
})
export class SwapiComponent implements OnInit {
  people: any[] = [];

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this.swapiService.getPeople().subscribe(response => {
      this.people = response.results;
      console.log(response.results);
    });
  }
}