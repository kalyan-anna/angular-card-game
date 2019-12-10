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
import { StoreModule } from '@ngrx/store';
import * as fromSnap from './reducers/snap.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { MatCardModule } from '@angular/material/card';

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
    MatButtonModule,
    MatCardModule,
    StoreModule.forRoot({ snap: fromSnap.snapReducer }, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
