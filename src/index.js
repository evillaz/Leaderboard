import './style.css';

localStorage.setItem('SCORES', '[]');

const addScore = (nameInput, scoreInput) => {
  const scores = JSON.parse(localStorage.getItem('SCORES')) || [];
  const score = { name: nameInput, score: scoreInput };
  scores.push(score);
  localStorage.setItem('SCORES', JSON.stringify(scores));
  const listItem = document.createElement('li');
  listItem.className = 'score';
  listItem.innerHTML = `${nameInput}: ${scoreInput}`;
  const list = document.getElementById('scores');
  list.appendChild(listItem);
};

addScore('Name', '150');
addScore('Name', '150');
addScore('Name', '150');
addScore('Name', '150');
addScore('Name', '150');
