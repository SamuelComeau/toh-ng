import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <h2>Heroes list</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes" 
      [class.selected]="hero === selectedHero"
      (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-traits [hero]="selectedHero"></hero-traits>
  `,

  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color:  	#F08080;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]

})
export class AppComponent  { 
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void{
   this.selectedHero = hero;
 }
}

 const HEROES: Hero[] = [
   {id: 1, name: 'Batman', strength:10, willpower:2, agility:6},
   {id: 2, name: 'Superman', strength:10, willpower:2, agility:6},
   {id: 3, name: 'Black Widow', strength:10, willpower:2, agility:6},
   {id: 4, name: 'Thor', strength:10, willpower:2, agility:6},
   {id: 5, name: 'Ironman', strength:10, willpower:2, agility:6},  
   {id: 6, name: 'Spiderman', strength:10, willpower:2, agility:6},
   {id: 7, name: 'Deadpool', strength:10, willpower:2, agility:6},
   {id: 8, name: 'Hulk', strength:10, willpower:2, agility:6},
   {id: 9, name: 'Storm', strength:10, willpower:2, agility:6},
   {id: 10, name: 'Doctor Strange', strength:10, willpower:2, agility:6},
 ];

 ]
