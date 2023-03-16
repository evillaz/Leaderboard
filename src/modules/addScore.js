const addScore = (nameInput, scoreInput) => {
  const listItem = document.createElement('li');
  listItem.className = 'score';
  listItem.innerHTML = `${nameInput}: ${scoreInput}`;
  const list = document.getElementById('scores');
  list.appendChild(listItem);
};

export default addScore;
