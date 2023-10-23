import { Component } from '@angular/core';
import { CommsService } from '../comms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  codeGame:string = ''

  constructor(public commsService:CommsService, private router: Router) {
    for(let i=0; i<1000; i++) clearInterval(i);
  }

  public async newGame() {
    await this.commsService.newGame()
    this.router.navigateByUrl('/lobby')
  }

  public async joinGame() {
    await this.commsService.joinGame(this.codeGame)
    this.router.navigateByUrl('/lobby')
  }
}
