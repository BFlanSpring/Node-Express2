const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord.timeToWords).toBe('function');
  });

  test('Converts 00:00 to midnight', () => {
    expect(timeWord.timeToWords('00:00')).toBe('midnight');
  });

  test('Converts 12:00 to noon', () => {
    expect(timeWord.timeToWords('12:00')).toBe('noon');
  });

  test('Converts 01:00 to one o’clock am', () => {
    expect(timeWord.timeToWords('01:00')).toBe('one o’clock am');
  });

  test('Converts 06:01 to six oh one am', () => {
    expect(timeWord.timeToWords('06:01')).toBe('six oh one am');
  });

  test('Converts 06:10 to six ten am', () => {
    expect(timeWord.timeToWords('06:10')).toBe('six ten am');
  });

  test('Converts 06:18 to six eighteen am', () => {
    expect(timeWord.timeToWords('06:18')).toBe('six eighteen am');
  });

  test('Converts 10:34 to ten thirty four am', () => {
    expect(timeWord.timeToWords('10:34')).toBe('ten thirty four am');
  });

  test('Converts 23:23 to eleven twenty three pm', () => {
    expect(timeWord.timeToWords('23:23')).toBe('eleven twenty three pm');
  });
});
