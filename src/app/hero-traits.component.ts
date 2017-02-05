import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'hero-traits',
  templateUrl: './hero-traits.Component.html',
  styleUrls: ['./hero-traits.components.css']
})
export class HeroTraitsComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(ReceivedHero => this.hero = ReceivedHero);
  }

  goBack(): void {
    this.location.back();
  }
}