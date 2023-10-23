import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommsService } from '../comms.service';
import { HandService } from '../hand.service';

@Component({
  selector: 'game-card',
  templateUrl: './gamecard.html',
  styleUrls: ['./gamecard.css']
})
export class GameCard {
  @Input() rarity!:string;
  @Input() name!:string;
  @Input() class!:string;

  public getBackground() {
    switch (this.rarity) {
      case 'common':
        return { 'background-color': '#959595' };
      
      case 'uncommon':
        
        return { 'background-color': '#1EFF00' };
      
      case 'rare':
        
        return { 'background-color': '#0070DD' };

      case 'epic':
        
        return { 'background-color': '#A335EE' };

      case 'legendary':
        
        return { 'background-color': '#FF8000' };
      
      default:
        return {};

    }
  }
}
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  interval:any

  constructor(public commsService:CommsService, private router: Router, public hand:HandService) {
    this.interval = setInterval(async () => {
      this.hand.segLeft -= 1
      if (this.hand.segLeft <= 0) {
        this.select(Math.floor(Math.random()*this.hand.pack.length))
      }
    }, 1000);
  }

  async ngOnInit(): Promise<void> {
    if (this.commsService.gameID=='') { 
      clearInterval(this.interval)
      this.router.navigateByUrl('/')
    }

    this.hand.segLeft = 120
  }

  select(i:any) {
    if (this.commsService.working) return
    clearInterval(this.interval);
    this.hand.add(this.hand.pack[i])
    this.commsService.pick(i)
    this.router.navigateByUrl('/game/wait')
  }

}
