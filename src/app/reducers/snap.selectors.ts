import { SnapState } from './snap.reducer';
import { createSelector } from '@ngrx/store';

const selectSnapState = (state: any) => state.snap;

export const selectPlayerPile = createSelector(
  selectSnapState,
  (state: SnapState) => state.player.cards
);

export const selectComputerPile = createSelector(
  selectSnapState,
  (state: SnapState) => state.computer.cards
);

export const selectCenterPile = createSelector(
  selectSnapState,
  (state: SnapState) => state.centerPile.cards
);

