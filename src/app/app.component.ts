import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Component, OnInit } from '@angular/core';


/*
 *
 * Component Decorator:
 *  requires a selector and template/templateUrl
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
/*
*   Don't use the new keyword for Services, it will create a new one each time
*      What if the service caches heroes and shares that cache with others? You couldn't do that.
*    By using DI the Service will be a singleton
*
* Angular component lifecycle: at creation, after each change, and at its eventual destruction
*/
export class AppComponent implements OnInit {
  title = 'Revature: Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  //init method
  ngOnInit(): void {
    this.getHeroes();
  }

  //Constructor
  constructor(private heroService: HeroService) {
  }

  //click fun
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  //GETTER
  getHeroes(): void{
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
}