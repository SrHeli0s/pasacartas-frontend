import { Component, OnInit } from '@angular/core';
import { CommsService } from '../comms.service';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css']
})
export class CardlistComponent implements OnInit {
  
  constructor(public commsService:CommsService) {}
  
  common:any
  uncommon:any
  rare:any
  epic:any
  legendary:any

  async ngOnInit(): Promise<void> {
    const cards = await this.commsService.getAll()

    this.common = cards.normal.common
    this.uncommon = cards.normal.uncommon
    this.rare = cards.normal.rare
    this.epic = cards.normal.epic
    this.legendary = cards.normal.legendary
  
  }
}
