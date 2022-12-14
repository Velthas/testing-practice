import { analyzeArray } from './analyzeArray';

test('Array of lenght 3 returns object with correct length property', () => {
  const analyzedArray = analyzeArray([1, 2, 3]);
  expect(analyzedArray.length).toBe(3);
});

test('Array [1, 2, 3] returns an object with max property of 3', () => {
  const analyzedArray = analyzeArray([1, 2, 3]);
  expect(analyzedArray.max).toBe(3);
});

test('Array [1, 2, 3] returns an object with min property of 1', () => {
  const analyzedArray = analyzeArray([1, 2, 3]);
  expect(analyzedArray.min).toBe(1);
});

test('Array [1, 2, 3] returns object with correct average value 2', () => {
  const analyzedArray = analyzeArray([1, 2, 3]);
  expect(analyzedArray.average).toBe(2);
});
