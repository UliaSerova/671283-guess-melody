const GAME_DATA = {
  currentTime: 30000,
  life: 2,
  time: 0
}

function getResults(answerArr) {
  let count = 0;
  if (answerArr.length < 9) {
    return -1;
  }
  for (const it of answerArr) {
    if (it.result && it.time < GAME_DATA.currentTime) {
      count = count + 2;
    }
    if (it.result && it.time >= GAME_DATA.currentTime) {
      count = count + 1;
    }
  }
  return count;
}

function getStats(userCount) {
  const statInt = 100 / statistics.length;
  let persent = 0;
  for (const it of statistics) {
    if (it < userCount) {
      persent = persent + statInt;
    }
  }
  return persent;
}

const statistics = [4, 5, 8, 10, 11];
const answerArr = [1, 3, 5, 2, 2, 1];

getResults(answerArr);
getStats(2);
export {getResults, getStats};
