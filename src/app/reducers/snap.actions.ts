import { createAction, props } from '@ngrx/store';

export const startGame = createAction('[Snap Game] Start game');
export const resetGame = createAction('[Snap Game ] Reset game');
export const setReactionTime = createAction(
  '[Snap Game] Reaction time',
  props<{ reactionTime: number }>()
);
export const computerTurnCard = createAction('[Computer Deck Component] Computer turn card');
export const playerTurnCard = createAction('[Player Deck Component] Player turn card');
export const computerCallSnap = createAction('[Computer Deck Component] Computer call snap');
export const playerCallSnap = createAction('[Player Deck Component] Player call snap');
