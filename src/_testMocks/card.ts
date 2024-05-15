import { Card } from 'app/types/Card';

export const cardMock: Card = {
  name: 'Dust Stalker',
  types: ['Creature'],
  imageUrl:
    'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=401864&type=card',
  text: "Devoid (This card has no color.)Haste At the beginning of each end step, if you control no other colorless creatures, return Dust Stalker to its owner's hand.",
  manaCost: '{2}{B}{R}',
  colorIdentity: ['B', 'R'],
};


export const cardMockTwo: Card = {
  name: 'Dust Stalker',
  types: ['Creature'],
  imageUrl:
    'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=401864&type=card',
  text: "Devoid (This card has no color.)Haste At the beginning of each end step, if you control no other colorless creatures, return Dust Stalker to its owner's hand.",
  manaCost: '{2}{B}{R}',
  colorIdentity: ['B', 'R'],
};

export const cardListMock: Card[] = [cardMock, cardMockTwo]
