import cleanPhone from '../src/js/cleanPhone';

describe('cleanPhone', () => {
  test('8 (927) 000-00-00 -> +79270000000', () => {
    expect(cleanPhone('8 (927) 000-00-00')).toBe('+79270000000');
  });

  test('+7 960 000 00 00 -> +79600000000', () => {
    expect(cleanPhone('+7 960 000 00 00')).toBe('+79600000000');
  });

  test('+86 000 000 0000 -> +860000000000', () => {
    expect(cleanPhone('+86 000 000 0000')).toBe('+860000000000');
  });

  test('7XXXXXXXXXX без + -> +7XXXXXXXXXX', () => {
    expect(cleanPhone('79600000000')).toBe('+79600000000');
  });

  test('невалидный ввод — возвращает очищенные цифры', () => {
    expect(cleanPhone('abc')).toBe('');
    expect(cleanPhone('123')).toBe('123');
  });
});