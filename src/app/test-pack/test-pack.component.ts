import { Component, OnInit } from '@angular/core';
import { CommsService } from '../comms.service';

@Component({
  selector: 'app-test-pack',
  templateUrl: './test-pack.component.html',
  styleUrls: ['./test-pack.component.css']
})
export class TestPackComponent {
  public pack:any

  constructor(public commsService: CommsService) {}

  async newPack() {
    await this.commsService.newGame()
    this.pack = await this.commsService.startGame()
  }

  

}
