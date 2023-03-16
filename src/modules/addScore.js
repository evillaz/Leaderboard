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

export default addScore;
