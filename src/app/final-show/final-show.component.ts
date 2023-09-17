import { Component, OnInit } from '@angular/core';
import { CommsService } from '../comms.service';
import { Router } from '@angular/router';
import { HandService } from '../hand.service';

@Component({
  selector: 'app-final-show',
  templateUrl: './final-show.component.html',
  styleUrls: ['./final-show.component.css']
})
export class FinalShowComponent implements OnInit {

  constructor(public commsService:CommsService, private router: Router, public hand:HandService) {}

  ngOnInit(): void {
    if (this.commsService.gameID=='') { this.router.navigateByUrl('/') }
  }
}
