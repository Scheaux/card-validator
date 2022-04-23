import App from '../App';

const cardArray = [
  [
    4916217292330482,
    true,
    'visa',
  ],
  [
    4485568952711820,
    true,
    'visa',
  ],
  [
    4916170619141811,
    true,
    'visa',
  ],
  [
    1210,
    false,
    null,
  ],
  [
    6011603381741755,
    true,
    'discover',
  ],
  [
    2200000000007389,
    true,
    'mir',
  ],
];

describe.each(cardArray)('card test', (card, expected, origin) => {
  test(`expect card number to be ${expected}`, () => {
    expect(App.validateCard(card)).toBe(expected);
  });

  test(`expect card origin to be ${origin}`, () => {
    expect(App.checkCardOrigin(card)).toBe(origin);
  });
});
