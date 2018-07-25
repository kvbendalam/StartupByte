import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {
  public hide = true;
  heroes = [
    new Hero(1, 'Arjun Maheshwari','Marketing Automation for Startups','Mar 8, 2018 11:00 AM','Mar 8, 2018 1:00 PM','Marketing Automation','assets/img/ArjunMaheswari.jpg'),
    new Hero(2, 'Bala Reddy','Building Agritech startups in india','Feb 23, 2018 11:00 AM','Feb 23, 2018 1:00PM','Agriculture','assets/img/ArjunBala.jpg'),
    new Hero(3, 'Chinmoy Mishra','Building Health care startups in india','Feb 15, 2018 11:00 AM','Feb 15, 2018 1:00PM','Health Care','assets/img/Balareddy.jpg'),
    new Hero(4, 'Arjun Bala','Intellectual Property for Startups','Jan 19,2018 11:00 AM','Jan 19, 2018 1:00PM','Intellectual Property(IP)','assets/img/ChinmoyMishra.jpg')
  ];
  myHero = this.heroes[0];
  constructor() { 
      
  }

  ngOnInit() {
    
  }

  loadMyChildComponent(){
    this.hide= false;
 }


}
