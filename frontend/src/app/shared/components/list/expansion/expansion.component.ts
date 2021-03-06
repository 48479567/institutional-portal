import { Component, OnInit, Input } from '@angular/core';
import { ExpansionModel } from '../../../../shared/models';

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.css']
})
export class ExpansionComponent implements OnInit {
  @Input() expansionData: ExpansionModel;
  @Input() ngClassSelected = 'default';

  constructor() { }

  ngOnInit(): void {
  }

}

