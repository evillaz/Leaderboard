import './style.css';
import addScore from './modules/addScore';
import {
  submitScore,
  getScores,
} from './modules/game';

const loadScores = async () => {
  const scoresContainer = document.getElementById('scores');
  scoresContainer.innerHTML = '';
  const scores = await getScores();
  scores.sort((a, b) => b.score - a.score);
  scores.forEach((score) => {
    addScore(score.user, score.score);
  });
};

loadScores();

const submitBtn = document.getElementById('submitScore');
const refreshBtn = document.getElementById('refreshBtn');

submitBtn.addEventListener('click', (e) => {
  const nameInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');
  e.preventDefault();
  submitScore(nameInput.value, scoreInput.value);
  nameInput.value = '';
  scoreInput.value = '';
});

refreshBtn.addEventListener('click', async () => {
  await loadScores();
});
