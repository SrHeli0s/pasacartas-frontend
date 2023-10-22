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

  constructor(public commsService:CommsService, private router: Router, public hand:HandService) {}

  async ngOnInit(): Promise<void> {
    if (this.commsService.gameID=='') { this.router.navigateByUrl('/') }
  }

  select(i:any) {
    if (this.commsService.working) return
    this.hand.add(this.hand.pack[i])
    this.commsService.pick(i)
    this.router.navigateByUrl('/game/wait')
  }

}
