import capitalize from './capitalize';

test('Capitalize first letter of string', () => {
    expect(capitalize('hello')).toMatch(/Hello/);
});

test('If first character is number, do nothing', () => {
    expect(capitalize('2b or not 2b')).toBe('2b or not 2b');
})