import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { CardPileComponent } from './card-pile/card-pile.component';
import { BrowserModule } from '@angular/platform-browser';
import { AvatarComponent } from './avatar/avatar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [HeaderComponent, CardComponent, CardPileComponent, AvatarComponent, MessageComponent],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  exports: [HeaderComponent, CardComponent, CardPileComponent, AvatarComponent, MessageComponent]
})
export class UiModule { }
