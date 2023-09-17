import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandService {
  public data:Array<any> = []
  public pack:Array<any> = []

  constructor() { }

  public add(pkm:any) {
    this.data.push(pkm)
  }
}
