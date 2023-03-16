const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const getGameId = async () => {
  let gameId = localStorage.getItem('gameId');
  if (!gameId) {
    const response = await fetch(`${baseUrl}games`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'my new game',
      }),
    });
    const data = await response.json();
    gameId = data.result.split(' ')[3];
    localStorage.setItem('gameId', gameId);
  }
  return gameId;
};

const submitScore = async (name, scoreInput) => {
  const gameId = await getGameId();
  const data = { user: name, score: scoreInput };
  await fetch(`${baseUrl}games/${gameId}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

const getScores = async () => {
  const gameId = await getGameId();
  if (gameId) {
    const sc = await fetch(`${baseUrl}games/${gameId}/scores/`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json;',
      },
    });
    const data = await sc.json();
    const scores = data.result;
    return scores;
  }
  return null;
};

export {
  getGameId,
  submitScore,
  getScores,
};
