import { createReducer, on } from '@ngrx/store';
import { startGame, resetGame, playerTurnCard, computerTurnCard, playerCallSnap, computerCallSnap } from './snap.actions';
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
    const shuffledCards = shuffleAndDeal([...allCards]);
    const playerTurn = selectRandomPlayer();

    return {
      ...state,
      centerPile: {
        cards: [],
        matching: false
      },
      player: {
        ...state.player,
        cards: shuffledCards.playerPile,
        turn: playerTurn === 1
      },
      computer: {
        ...state.computer,
        cards: shuffledCards.computerPile,
        turn: playerTurn === 2
      },
      isPlaying: true,
      winner: null
    };
  }),

  on(resetGame, () => ({ ...initialState })),

  on(playerTurnCard, state => {
    const playerCards = [...state.player.cards];
    const playedCard: Card = { ...playerCards.pop() };

    const centerCards = [...state.centerPile.cards];
    playedCard.status = 'faceup';
    centerCards.push(playedCard);

    const newState = {
      ...state,
      player: {
        cards: playerCards,
        turn: false
      },
      computer: {
        ...state.computer,
        turn: state.computer.cards.length > 0 && playerCards.length > 0
      },
      centerPile: {
        ...state.centerPile,
        cards: centerCards,
        matching: isMatching(centerCards)
      }
    };

    return {
      ...newState,
      winner: findWinner(newState),
      isPlaying: !findWinner(newState)
    };
  }),

  on(computerTurnCard, state => {
    const computerCards = [...state.computer.cards];
    const playedCard: Card = { ...computerCards.pop() };

    const centerCards = [...state.centerPile.cards];
    playedCard.status = 'faceup';
    centerCards.push(playedCard);

    const newState = {
      ...state,
      player: {
        ...state.player,
        turn: state.player.cards.length > 0 && computerCards.length > 0
      },
      computer: {
        cards: computerCards,
        turn: false
      },
      centerPile: {
        ...state.centerPile,
        cards: centerCards,
        matching: isMatching(centerCards)
      }
    } as SnapState;

    return {
      ...newState,
      winner: findWinner(newState),
      isPlaying: !findWinner(newState)
    };
  }),

  on(playerCallSnap, state => {
    if (!state.centerPile.matching) {
      return state;
    }
    const playerCards = [...state.centerPile.cards, ...state.player.cards]
      .map((card: Card) => {
        return {
          ...card,
          status: 'facedown'
        };
      });

    return {
      ...state,
      player: {
        cards: playerCards,
        turn: true
      },
      centerPile: {
        cards: [],
        matching: false
      }
    } as SnapState;
  }),

  on(computerCallSnap, state => {
    if (!state.centerPile.matching) {
      return state;
    }
    const computerCards = [...state.centerPile.cards, ...state.computer.cards]
      .map((card: Card) => {
        return {
          ...card,
          status: 'facedown'
        };
      });

    return {
      ...state,
      computer: {
        cards: computerCards,
        turn: true
      },
      centerPile: {
        cards: [],
        matching: false
      }
    } as SnapState;
  })
);

function shuffleAndDeal(cards: Card[]) {
  const playerPile = [];
  const computerPile = [];

  // tslint:disable-next-line:prefer-for-of
  for (let i = cards.length - 1; i >= 0; i--) {
    const card = cards.splice(Math.floor(Math.random() * cards.length), 1)[0];
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

function selectRandomPlayer() {
  return Math.floor(Math.random() * 2) + 1;
}

function findWinner(state: SnapState) {
  if (state.player.cards.length <= 0) {
    return 'computer';
  } else if (state.computer.cards.length <= 0) {
    return 'player';
  } else {
    return null;
  }
}

function isMatching(cards: Card[]) {
  if (cards.length < 2) {
    return false;
  }
  const topCard: Card = cards[cards.length - 1];
  const previousCard: Card = cards[cards.length - 2];
  if (topCard.number === previousCard.number || topCard.shape === previousCard.shape) {
    return true;
  }

  return false;
}

export function snapReducer(state, action) {
  return _snapReducer(state, action);
}
