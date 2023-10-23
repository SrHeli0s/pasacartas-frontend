import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandService {
  public data:Array<any> = []
  public pack:Array<any> = []
  public segLeft:number = 0

  constructor() { }

  public add(pkm:any) {
    this.data.push(pkm)
  }
}
