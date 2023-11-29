import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommsService {
  private url:string = "https://pasacartas-backend.vercel.app/" //URL del backend
  
  public working = false
  public gameID = ''
  public playerID = -1

  constructor(private http: HttpClient) { }

  // ======================= GAME HANDLE ======================= \\
  public async newGame() {
    this.working = true
    const res = await this.get('new')
    this.gameID = res.code
    this.playerID = res.playerid
    this.working = false
  }

  public async joinGame(id:string) {
    this.working = true
    const res = await this.get('join/'+id)
    this.gameID = res.code
    this.playerID = res.playerid
    this.working = false
  }

  public async startGame(settings:any) {
    this.working = true
    const res = await this.post('start/'+this.gameID,{'playerid':this.playerID, 'settings':settings})
    this.working = false
    return res.pack
  }

  public async isReady() {
    this.working = true
    const res = await this.post('isready/'+this.gameID,{'playerid':this.playerID})
    if (res.state == 0) { 
      this.working = false
      return undefined
    }
    else { 
      this.working = false
      return res.pack
    }
  }

  public async gameStarted() {
    this.working = true
    const res = await this.post('gamestarted/'+this.gameID,{'playerid':this.playerID})
    if (res.state == 0) {
      this.working = false
      return undefined
    }
    else {
      this.working = false
      return res.pack
    }
  }

  public async pick(i:any) {
    this.working = true
    await this.post('pick/'+this.gameID+'/'+i,{'playerid':this.playerID})
    this.working = false
  }

  public async generatePack(meta:boolean) {
    this.working = true
    const res = await this.get('generatePack/'+(meta ? '1' : '0'))
    this.working = false
    return res.pack
  }

  public async getAll() {
    this.working = true
    const res = await this.get('getAll')
    this.working = false
    return res
  }

  // ======================= SETTINGS ======================= \\
  public async getSettings() {
    this.working = true
    const res =  await this.get('conf')
    this.working = false
    return res
  }

  public async setSettings(settings:any) {
    this.working = true
    await this.post('conf',{'data':settings})
    this.working = false
  }
  

  // ======================= HELPER FUNCTIONS ======================= \\

  private post(where:string, what:any): Promise<any> {
    console.log("POST ",what," en " + this.url+where)
    return new Promise((resolve, reject) => {
      this.http.post(this.url+where, what).subscribe({
        next: (v:any) => {
          console.log("RECIBIDO ", v)
          resolve(v);
        },
        error: (e) => {
          console.error("ERROR ", e)
          throw e
        }
      });
    })
  }

  private get(where:string): Promise<any> {
    console.log("GET en " + this.url+where)
    return new Promise((resolve, reject) => {
      this.http.get(this.url+where).subscribe({
        next: (v:any) => {
          console.log("RECIBIDO ", v)
          resolve(v);
        },
        error: (e) => {
          console.error("ERROR ", e)
          throw e
        }
      });
    })
  }
}
