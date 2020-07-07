import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  hero = {
    id: 1,
    name: 'kimtae',
  };
  // heroes = HEROES;
  heroes: Hero[];
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  selectedHero: Hero;

  onSelect(hero) {
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {}
}
