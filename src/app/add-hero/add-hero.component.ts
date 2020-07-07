import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../heroes/hero';
@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css'],
})
export class AddHeroComponent implements OnInit {
  addHero(heroname: string): void {
    heroname = heroname.trim();
    if (!heroname) {
      return;
    }
    this.heroService.add({ name: heroname } as Hero).subscribe();
  }
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {}
}
