import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bts',
  templateUrl: './bts.component.html',
  styleUrls: ['./bts.component.scss']
})
export class BtsComponent implements OnInit {

  constructor() { }

  scrollToId(id: string) {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
  }


  ngOnInit(): void {
  }

}
