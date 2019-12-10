import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { CardPileComponent } from './card-pile/card-pile.component';
import { BrowserModule } from '@angular/platform-browser';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  declarations: [HeaderComponent, CardComponent, CardPileComponent, AvatarComponent],
  imports: [
    BrowserModule
  ],
  exports: [HeaderComponent, CardComponent, CardPileComponent, AvatarComponent]
})
export class UiModule { }
