type CardStatus = 'faceup' | 'facedown';

interface Card {
  id: string;
  shape: string;
  number: string;
  status: CardStatus;
}
