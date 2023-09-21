import { Component, OnInit } from '@angular/core';
import { CommsService } from '../comms.service';

@Component({
  selector: 'app-test-pack',
  templateUrl: './test-pack.component.html',
  styleUrls: ['./test-pack.component.css']
})
export class TestPackComponent implements OnInit{
  settings:any
  public pack:any

  constructor(public commsService: CommsService) {}

  async newPack() {
    await this.commsService.setSettings(this.settings)
    this.pack = await this.commsService.generatePack()
  }

  async ngOnInit(): Promise<void> {
    let res = await this.commsService.getSettings()
    this.settings = res.data
  }
}
