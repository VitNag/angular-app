import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  person: any;

  constructor(
    private route: ActivatedRoute,
    private swapiService: SwapiService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const personId = params['id'];
      this.getPerson(personId);
    });
  }

  getPerson(id: number) {
    this.swapiService.getPerson(id).subscribe(response => {
      this.person = response;
    });
  }
}
