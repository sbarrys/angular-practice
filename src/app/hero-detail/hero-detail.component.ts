import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  update(hero: Hero) {
    this.heroService.update(hero).subscribe((_) => this.goback());
  }
  goback() {
    this.location.back();
  }
  constructor(
    private route: ActivatedRoute, // HeroDetailComponent의 instance의 정보를 가지고 있다.
    private heroService: HeroService,
    private location: Location // 브라우저와 상호작용 하며 주소의 변화를 본다
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
}
