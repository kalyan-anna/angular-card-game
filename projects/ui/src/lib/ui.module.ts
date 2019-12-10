import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { CardPileComponent } from './card-pile/card-pile.component';


@NgModule({
  declarations: [HeaderComponent, CardComponent, CardPileComponent],
  imports: [
  ],
  exports: [HeaderComponent, CardComponent, CardPileComponent]
})
export class UiModule { }
