import { caesarCipher } from './caesarCipher';

test('string "attack at dawn" with shift of 5 returns "fyyfhp fy ifbs"', () => {
  expect(caesarCipher.cipher('attack at dawn')).toBe('fyyfhp fy ifbs');
});

test('string "attack at dawn" with shift of 11 returns "leelnv le olhy"', () => {
  expect(() => {
    caesarCipher.shift(11);
    return caesarCipher.cipher('attack at dawn');
  }).toBe('leelnv le olhy');
});

test('function correctly handles capitalized words.', () => {
  expect(() => {
    caesarCipher.shift(5);
    return caesarCipher.cipher('AtTaCk aT DaWn');
  }).toBe('FyYfHp fY IfBs');
});

test('handles a negative shift of -2', () => {
  expect(() => {
    caesarCipher.shift(-2);
    return caesarCipher.cipher('attack at dawn') 
  }).toBe('yrryai yr byul');
})