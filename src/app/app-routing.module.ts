import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LobbyComponent } from './lobby/lobby.component';
import { GameComponent } from './game/game.component';
import { TestPackComponent } from './test-pack/test-pack.component';
import { WaitScreenComponent } from './wait-screen/wait-screen.component';
import { FinalShowComponent } from './final-show/final-show.component';

const routes: Routes = [
  { path: "", component: LandingComponent},
  { path: "lobby", component: LobbyComponent},
  { path: "game", component: GameComponent},
  { path: "game/wait", component: WaitScreenComponent},
  { path: "game/final", component: FinalShowComponent},
  { path: "testPack", component:TestPackComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
