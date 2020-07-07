import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../heroes/hero';
@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css'],
})
export class AddHeroComponent implements OnInit {
  hero: Hero;

  addHero(heroname: string): void {
    heroname = heroname.trim();
    if (!heroname) {
      return;
    }
    this.hero.name = heroname;
    this.heroService.add(this.hero);
  }
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {}
}
