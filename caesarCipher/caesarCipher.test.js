import { caesarCipher } from './caesarCipher';

test('string "attack at dawn" with shift of 5 returns "fyyfhp fy ifbs"', () => {
  expect(caesarCipher.cipher('attack at dawn')).toBe('fyyfhp fy ifbs');
});

test('string "attack at dawn" with shift of 11 returns "leelnv le olhy"', () => {
  caesarCipher.shift(11);
  expect(caesarCipher.cipher('attack at dawn')).toBe('leelnv le olhy');
});

test('function correctly handles capitalized words.', () => {
  caesarCipher.shift(5);
  expect(caesarCipher.cipher('AtTaCk aT DaWn')).toBe('FyYfHp fY IfBs');
});

test('handles a negative shift of -2', () => {
  caesarCipher.shift(-2);
  expect(caesarCipher.cipher('attack at dawn')).toBe('yrryai yr byul');
})