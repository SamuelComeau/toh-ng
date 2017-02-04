import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-traits',
  template:`
  <div class =boxed *ngIf="hero != null">
      <h2>{{hero.name}} traits:</h2>
      <div><label>id: </label> {{hero.id}} </div>
      <div>
        <label>name: </label> 
        <input [(ngModel)]="hero.name" placeholder="name">
      </div>
  </div>
  `,

  styles: [`
  .boxed {
    border: 3px outset coral;
    background-color:   #fce8e8;
    width: 15em;
}`
  ]
})
export class HeroTraitsComponent {
    @Input()
    hero: Hero;
}