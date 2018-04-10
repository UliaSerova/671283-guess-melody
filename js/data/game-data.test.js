import {assert} from 'chai';
import {getResults, getStats} from './game-data';

describe(`Обработка ответов пользователя`, () => {
  it(`Игрок ответил меньше, чем на 10 вопросов`, function () {
    assert.equal(getResults([
      {result: true, time: 20000},
      {result: true, time: 10000},
      {result: true, time: 10000},
      {result: true, time: 50000},
      {result: true, time: 30000}
    ]), -1);
  });
  it(`Игрок ответил на все вопросы правильно и не быстро`, function () {
    assert.equal(getResults([
      {result: true, time: 50000},
      {result: true, time: 40000},
      {result: true, time: 60000},
      {result: true, time: 50000},
      {result: true, time: 60000},
      {result: true, time: 40000},
      {result: true, time: 70000},
      {result: true, time: 30000},
      {result: true, time: 70000},
      {result: true, time: 50000}
    ]), 10);
  });
  it(`Игрок ответил на все вопросы правильно и быстро`, function () {
    assert.equal(getResults([
      {result: true, time: 10000},
      {result: true, time: 10000},
      {result: true, time: 10000},
      {result: true, time: 20000},
      {result: true, time: 10000},
      {result: true, time: 20000},
      {result: true, time: 10000},
      {result: true, time: 20000},
      {result: true, time: 10000},
      {result: true, time: 10000}
    ]), 20);
  });
  it(`Игрок не ответил на все вопросы правильно`, function () {
    assert.equal(getResults([
      {result: true, time: 30000},
      {result: true, time: 50000},
      {result: false, time: 10000},
      {result: false, time: 20000},
      {result: true, time: 10000},
      {result: true, time: 20000},
      {result: true, time: 10000},
      {result: true, time: 20000},
      {result: true, time: 10000},
      {result: true, time: 10000}
    ]), 14);
  });
});
describe(`Обработка статистики`, () => {
  it(`Игрок показал лучший результат`, function () {
    assert.equal(getStats(20), 100);
  });
  it(`Игрок показал худший результат`, function () {
    assert.equal(getStats(1), 0);
  });
  it(`Игрок показал средний результат`, function () {
    assert.equal(getStats(9), 60);
  });
});
