import { Component, OnInit, Input } from '@angular/core';
import { PersonalSayModel } from '../../../../shared/models';

@Component({
  selector: 'app-personal-say',
  template: `
  <div>
    <img [src]="personalSayData.src" [alt]="personalSayData.alt" />
  </div>
  <div class="container-description">
    <div class="quote start">“</div>
    <p>{{ personalSayData.message }}</p>
    <div class="quote end">”</div>
    <h4>{{ personalSayData.personalName }}</h4>
    <p>{{ personalSayData.rol }}</p>
  </div>
  `,
  styleUrls: ['./personal-say.component.css']
})

export class PersonalSayComponent implements OnInit {
  @Input() personalSayData: PersonalSayModel = new PersonalSayModel();

  constructor() { }

  ngOnInit(): void { }
}
