import { createReducer, on } from '@ngrx/store';
import { startGame, resetGame } from './snap.actions';
import { allCards } from '../models/all-cards';

export interface SnapState {
  player: {
    cards: Card[];
    turn: boolean;
  };
  computer: {
    cards: Card[];
    turn: boolean;
    reactionTime: number;
  };
  centerPile: {
    cards: Card[];
    matching: boolean;
  };
  isPlaying: boolean;
  winner: string;
}

export const initialState: SnapState = {
  player: {
    cards: [],
    turn: false
  },
  computer: {
    cards: [],
    turn: false,
    reactionTime: 2000
  },
  centerPile: {
    cards: [...allCards],
    matching: false
  },
  isPlaying: false,
  winner: null
};

// tslint:disable-next-line:variable-name
const _snapReducer = createReducer(initialState,
  on(startGame, state => {
    const shuffledCards = shuffleAndDeal(state.centerPile.cards);
    return {
      ...state,
      centerPile: {
        cards: [],
        matching: false
      },
      player: {
        ...state.player,
        cards: shuffledCards.playerPile
      },
      computer: {
        ...state.computer,
        cards: shuffledCards.computerPile
      },
      isPlaying: true,
      winner: null
    };
  }),

  on(resetGame, () => ({ ...initialState })),
);

function shuffleAndDeal(cards: Card[]) {
  const playerPile = [];
  const computerPile = [];

  // tslint:disable-next-line:prefer-for-of
  for (let i = allCards.length - 1; i > 0; i--) {
    const card = allCards.splice(Math.floor(Math.random() * allCards.length), 1)[0];
    if (i % 2 === 0) {
      playerPile.push(card);
    } else {
      computerPile.push(card);
    }
  }

  return {
    playerPile,
    computerPile
  };
}

export function snapReducer(state, action) {
  return _snapReducer(state, action);
}
