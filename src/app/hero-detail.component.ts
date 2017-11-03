import { HeroService } from './hero.service';
import { Hero } from './hero';
import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
/*
1. component class name should be written in upper camel case and end in the word "Component"
2. he component file name should be spelled in lower dash case, each word separated by dashes,
     and end in .component.ts
*/
@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: [ './hero-detail.component.css' ]
})

//Always export the component class because you'll always import it elsewhere.
//Like public in java
export class HeroDetailComponent{
    //Attribute Directive: @Input()
     hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
      ) {}
    
      ngOnInit(): void {
        this.route.paramMap
          .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
          .subscribe(hero => this.hero = hero);
      }
     
      goBack(): void {
        this.location.back();
      }
}