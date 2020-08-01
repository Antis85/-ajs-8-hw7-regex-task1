import Validator from '../app';

test('Проверка валидного имени пользователя: из букв', () => {
  const name = 'username';
  const validation = new Validator(name);
  const recieved = validation.validateUsername();
  expect(recieved).toBe('name is OK');
});

test('Проверка валидного имени пользователя: из букв и цифр', () => {
  const name = 'user123name';
  const validation = new Validator(name);
  const recieved = validation.validateUsername();
  expect(recieved).toBe('name is OK');
});

test('Проверка валидного имени пользователя: из букв, цифр и символов', () => {
  const name = 'user-123_name';
  const validation = new Validator(name);
  const recieved = validation.validateUsername();
  expect(recieved).toBe('name is OK');
});

test('Проверка валидного имени пользователя: разный регистр', () => {
  const name = 'UserNAME';
  const validation = new Validator(name);
  const recieved = validation.validateUsername();
  expect(recieved).toBe('name is OK');
});

test('Проверка невалидного имени пользователя: пусто', () => {
  const name = '';
  const validation = new Validator(name);
  const recieved = validation.validateUsername();
  expect(recieved).toBe('invalid name');
});

test('Проверка невалидного имени пользователя: нелатинские буквы', () => {
  const name = 'ИмяЮзера';
  const validation = new Validator(name);
  const recieved = validation.validateUsername();
  expect(recieved).toBe('invalid name');
});

test('Проверка невалидного имени пользователя: >3 цифр', () => {
  const name = 'user-1234_name';
  const validation = new Validator(name);
  const recieved = validation.validateUsername();
  expect(recieved).toBe('invalid name');
});

test('Проверка невалидного имени пользователя: цифры в начале', () => {
  const name = '123user-_name';
  const validation = new Validator(name);
  const recieved = validation.validateUsername();
  expect(recieved).toBe('invalid name');
});

test('Проверка невалидного имени пользователя: цифры в конце', () => {
  const name = 'user-_name123';
  const validation = new Validator(name);
  const recieved = validation.validateUsername();
  expect(recieved).toBe('invalid name');
});

test('Проверка невалидного имени пользователя: символы в начале', () => {
  const name = '-user_name';
  const validation = new Validator(name);
  const recieved = validation.validateUsername();
  expect(recieved).toBe('invalid name');
});

test('Проверка невалидного имени пользователя: символы в конце', () => {
  const name = 'user-name_';
  const validation = new Validator(name);
  const recieved = validation.validateUsername();
  expect(recieved).toBe('invalid name');
});

test('Проверка невалидного имени пользователя: недопустимые символы', () => {
  const name = 'user name';
  const validation = new Validator(name);
  const recieved = validation.validateUsername();
  expect(recieved).toBe('invalid name');
});

test('Проверка невалидного имени пользователя: недопустимые символы', () => {
  const name = 'user!@#№$%^&*()=+/[]{}<>,.;:?~name';
  const validation = new Validator(name);
  const recieved = validation.validateUsername();
  expect(recieved).toBe('invalid name');
});
