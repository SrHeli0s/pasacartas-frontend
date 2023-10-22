import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LobbyComponent } from './lobby/lobby.component';
import { GameCard, GameComponent } from './game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { TestPackComponent } from './test-pack/test-pack.component';
import { WaitScreenComponent } from './wait-screen/wait-screen.component';
import { FinalShowComponent } from './final-show/final-show.component';
import { CardlistComponent } from './cardlist/cardlist.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LobbyComponent,
    GameComponent,
    GameCard,
    TestPackComponent,
    WaitScreenComponent,
    FinalShowComponent,
    CardlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
