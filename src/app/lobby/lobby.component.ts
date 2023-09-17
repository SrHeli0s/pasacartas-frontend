import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommsService } from '../comms.service';
import { HandService } from '../hand.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  interval:any
  settings:any

  constructor(public commsService:CommsService, private router: Router, public hand:HandService) {
    if (this.commsService.playerID != 0) {

      this.interval = setInterval(async () => {
        let pack = await this.commsService.gameStarted()
        if (pack!=undefined) {
          this.hand.pack = pack
          clearInterval(this.interval);
          if (this.hand.pack.length == 0) {
            router.navigateByUrl('/game')
          }
          else {
            router.navigateByUrl('/game')
          }
        }
      }, 3000);
    }
  }

  async ngOnInit(): Promise<void> {
    if (this.commsService.gameID=='') { 
      clearInterval(this.interval);
      this.router.navigateByUrl('/')
    }
    let res = await this.commsService.getSettings()
    this.settings = res.data
  }

  public async startGame() {
    await this.commsService.setSettings(this.settings)
    this.hand.pack = await this.commsService.startGame()
    this.router.navigateByUrl('/game')
  }
}
