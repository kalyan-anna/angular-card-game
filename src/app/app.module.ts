import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { UiModule } from 'projects/ui/src/public-api';
import { GameComponent } from './containers/game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
