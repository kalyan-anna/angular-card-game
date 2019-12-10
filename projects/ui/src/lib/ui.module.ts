import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { CardPileComponent } from './card-pile/card-pile.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [HeaderComponent, CardComponent, CardPileComponent],
  imports: [
    BrowserModule
  ],
  exports: [HeaderComponent, CardComponent, CardPileComponent]
})
export class UiModule { }
