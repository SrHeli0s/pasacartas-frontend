import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommsService {
  private url:string = "http://pasacartas-backend.vercel.app" //URL del backend
  
  public gameID = ''
  public playerID = -1

  constructor(private http: HttpClient) { }

  // ======================= GAME HANDLE ======================= \\
  public async newGame() {
    const res = await this.get('new')
    this.gameID = res.code
    this.playerID = res.playerid
  }

  public async joinGame(id:string) {
    const res = await this.get('join/'+id)
    this.gameID = res.code
    this.playerID = res.playerid
  }

  public async startGame() {
    const res = await this.post('start/'+this.gameID,{'playerid':this.playerID})
    return res.pack
  }

  public async isReady() {
    const res = await this.post('isready/'+this.gameID,{'playerid':this.playerID})
    if (res.state == 0) { return undefined }
    else { return res.pack }
  }

  public async gameStarted() {
    const res = await this.post('gamestarted/'+this.gameID,{'playerid':this.playerID})
    if (res.state == 0) { return undefined }
    else { return res.pack }
  }

  public async pick(i:any) {
    await this.post('pick/'+this.gameID+'/'+i,{'playerid':this.playerID})
  }

  // ======================= SETTINGS ======================= \\
  public async getSettings() {
    return await this.get('conf')
  }

  public async setSettings(settings:any) {
    await this.post('conf',{'data':settings})
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
