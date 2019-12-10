import { SnapState } from './snap.reducer';
import { createSelector } from '@ngrx/store';

const selectSnapState = (state: any) => state.snap;

const selectPlayerPile = createSelector(
  selectSnapState,
  (state: SnapState) => state.player.cards
);

const selectComputerPile = createSelector(
  selectSnapState,
  (state: SnapState) => state.computer.cards
);

const selectCenterPile = createSelector(
  selectSnapState,
  (state: SnapState) => state.centerPile.cards
);

const selectPlaying = createSelector(
  selectSnapState,
  (state: SnapState) => state.isPlaying
);

const selectPlayerTurn = createSelector(
  selectSnapState,
  (state: SnapState) => state.player.turn && state.isPlaying
);

const selectComputerTurn = createSelector(
  selectSnapState,
  (state: SnapState) => state.computer.turn && state.isPlaying
);

const selectMatch = createSelector(
  selectSnapState,
  (state: SnapState) => state.centerPile.matching && state.isPlaying
);

const selectReactionTime = createSelector(
  selectSnapState,
  (state: SnapState) => state.computer.reactionTime
);

export const fromSnap = {
  selectPlayerPile,
  selectComputerPile,
  selectCenterPile,
  selectPlaying,
  selectPlayerTurn,
  selectComputerTurn,
  selectMatch,
  selectReactionTime
};
