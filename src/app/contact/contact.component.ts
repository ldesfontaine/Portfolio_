import { Component, OnInit } from '@angular/core';
import { faEnvelope, faMobile,faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faEnvelope = faEnvelope;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faMobile = faMobile;
  faPaperPlane = faPaperPlane;
  constructor() { }

  ngOnInit(): void {
  }

}
