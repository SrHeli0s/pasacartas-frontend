import { Component, OnInit } from '@angular/core';
import { CommsService } from '../comms.service';
import { Router } from '@angular/router';
import { HandService } from '../hand.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-wait-screen',
  templateUrl: './wait-screen.component.html',
  styleUrls: ['./wait-screen.component.css']
})
export class WaitScreenComponent implements OnInit{
  interval:any

  constructor(public commsService:CommsService, private router: Router, public hand:HandService) {

    this.interval = setInterval(async () => {
      let pack = await this.commsService.isReady()
      if (pack!=undefined) {
        this.hand.pack = pack
        clearInterval(this.interval);
        await new Promise( resolve => setTimeout(resolve, 4000) );
        if (this.hand.pack.length == 0) {
          router.navigateByUrl('/game/final')
        }
        else {
          router.navigateByUrl('/game')
        }
      }
    }, 3000);
  }

  ngOnInit(): void {
    if (this.commsService.gameID=='') { 
      clearInterval(this.interval);
      this.router.navigateByUrl('/')
    }
  }
}
