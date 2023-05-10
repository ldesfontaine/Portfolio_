import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patrimoine',
  templateUrl: './patrimoine.component.html',
  styleUrls: ['./patrimoine.component.scss']
})
export class PatrimoineComponent implements OnInit {

  constructor() { }

  scrollToId(id: string) {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
  }

  ngOnInit(): void {
  }

}
