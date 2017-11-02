import { Hero } from './hero';
import { Injectable } from "@angular/core";
import { HEROES } from './mock-heroes';

/*
* applying the @Injectable() decorator ​from the start ensures consistency and future-proofing
*/
@Injectable()
export class HeroService{

    /*
    *   A Promise essentially promises to call back when the results are ready. 
    *    You ask an asynchronous service to do some work and give it a callback function. 
    *   The service does that work and eventually calls the function with the results or an error.
    */
    getHeroes() : Promise<Hero[]>{
        return Promise.resolve(HEROES);
    }

     // See the "Take it slow" appendix
    getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
}