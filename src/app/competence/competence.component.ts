import { Competence } from './../models/competence.model';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent{
@Input() Competence!: Competence;

}
