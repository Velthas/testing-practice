import reverseString from './reverseString';

test('function correctly reverses string Memento Mori', () => {
expect(reverseString('Memento Mori')).toBe('iroM otnemeM'); 
});

test('function correctly reverses a series of blank spaces (???)', () => {
    expect(reverseString('     ')).toBe('     ');
});
