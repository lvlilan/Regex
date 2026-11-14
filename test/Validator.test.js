import Validator from '../src/js/Validator';

describe('Validator.validateUsername', () => {
  const validator = new Validator();

  test('корректные имена', () => {
    expect(validator.validateUsername('user_name')).toBe(true);
    expect(validator.validateUsername('user-name')).toBe(true);
    expect(validator.validateUsername('User123Name')).toBe(true);
    expect(validator.validateUsername('a')).toBe(true);
  });

  test('недопустимые символы', () => {
    expect(validator.validateUsername('user name')).toBe(false);
    expect(validator.validateUsername('user@name')).toBe(false);
    expect(validator.validateUsername('имя')).toBe(false);
  });

  test('начинается с цифры/_/-', () => {
    expect(validator.validateUsername('1user')).toBe(false);
    expect(validator.validateUsername('_user')).toBe(false);
    expect(validator.validateUsername('-user')).toBe(false);
  });

  test('заканчивается на цифру/_/-', () => {
    expect(validator.validateUsername('user1')).toBe(false);
    expect(validator.validateUsername('user_')).toBe(false);
    expect(validator.validateUsername('user-')).toBe(false);
  });

  test('более трёх цифр подряд', () => {
    expect(validator.validateUsername('user1234name')).toBe(false);
    expect(validator.validateUsername('user123name')).toBe(true);
  });
});