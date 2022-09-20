import { calculator } from './calculator.js';

test('using add method, 2 + 2 returns 4', () => {
    expect(calculator.add(2, 2)).toBe(4);
});

test('using add method, 386 + 492 returns 878', () => {
    expect(calculator.add(386, 492)).toBe(878);
});

test('using subtract method, 2 - 2 returns 0', () => {
    expect(calculator.subtract(2, 2)).toBe(0);
});

test('using subtract method, 386 - 492 returns -106', () => {
    expect(calculator.subtract(386, 492)).toBe(-106);
});

test('using multiply method, 2 * 2 returns 4', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
});

test('using multiply method, 7 * 0 returns 0', () => {
    expect(calculator.multiply(7, 0)).toBe(0);
});

test('using divide method, 2 : 2 returns 1', () => {
    expect(calculator.divide(2, 2)).toBe(1);
});

test('using divide method, 7 : 0 returns Infinity', () => {
    expect(calculator.divide(7, 0)).toBe(Infinity);
});
