import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coachee-section',
  templateUrl: './coachee-section.component.html',
  styleUrls: ['./coachee-section.component.css']
})
export class CoacheeSectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toCoacheeProfile(){
    console.log("clicked on coachee section")
    this.router.navigate(['coachee-profile'])
  }

}
