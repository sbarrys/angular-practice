import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HEROES } from './heroes/mock-heroes';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  //Mock 히어로 리스트 를 가져온다.
  getHeroes(): Hero[] {
    return HEROES;
  }
  getHero(id: number): Observable<Hero> {
    return of(HEROES.find((hero) => hero.id === id));
  }

  constructor() {}
}
