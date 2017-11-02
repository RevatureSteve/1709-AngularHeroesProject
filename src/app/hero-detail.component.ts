import { Hero } from './hero';
import { Component, Input } from '@angular/core';

/*
1. component class name should be written in upper camel case and end in the word "Component"
2. he component file name should be spelled in lower dash case, each word separated by dashes,
     and end in .component.ts
*/
@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html'
})

//Always export the component class because you'll always import it elsewhere.
//Like public in java
export class HeroDetailComponent{
    //Attribute Directive: @Input()
    @Input() hero: Hero;
}