import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }


  ngOnInit(): {
  }
  onSelect(hero: Hero): void {
        this.selectedHero = hero;
        console.log("selected a hero!");
        console.log("Is it going to the edit screen also??")
  }

}
