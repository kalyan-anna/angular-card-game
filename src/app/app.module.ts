import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { UiModule } from 'projects/ui/src/public-api';
import { GameComponent } from './containers/game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerDeckComponent } from './containers/player-deck/player-deck.component';
import { ComputerDeckComponent } from './containers/computer-deck/computer-deck.component';
import { CenterDeckComponent } from './containers/center-deck/center-deck.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    PlayerDeckComponent,
    ComputerDeckComponent,
    CenterDeckComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
