const grid = document.getElementById('grid');
const gameOverEl = document.getElementById('gameOver');
const scoreEl = document.getElementById('score');
const highScoreEl = document.getElementById('highScore');
let board = [];
let score = 0;
let highScore = localStorage.getItem('highScore') || 0;
const size = 4;

function createBoard() {
  board = [];
  grid.innerHTML = '';
  gameOverEl.style.display = 'none';
  score = 0;
  updateScore();
  for (let i = 0; i < size * size; i++) {
    board.push(0);
    const tile = document.createElement('div');
    tile.classList.add('tile');
    grid.appendChild(tile);
  }
  addNumber();
  addNumber();
  updateBoard();
}

function updateScore() {
  scoreEl.textContent = 'Score: ' + score;
  if (score > highScore) {
    highScore = score;
    localStorage.setItem('highScore', highScore);
  }
  highScoreEl.textContent = 'High Score: ' + highScore;
}

function addNumber() {
  let options = [];
  for (let i = 0; i < board.length; i++) {
    if (board[i] === 0) options.push(i);
  }
  if (options.length === 0) return;
  let index = options[Math.floor(Math.random() * options.length)];
  board[index] = Math.random() > 0.5 ? 2 : 4;
}

function updateBoard() {
  for (let i = 0; i < board.length; i++) {
    const tile = grid.children[i];
    tile.textContent = board[i] === 0 ? '' : board[i];
    tile.className = 'tile';
    if (board[i] !== 0) tile.classList.add('tile-' + board[i]);
  }
}

function move(dir) {
  let moved = false;
  for (let i = 0; i < size; i++) {
    let line = [];
    for (let j = 0; j < size; j++) {
      let idx = dir === 'left' || dir === 'right' ? i * size + j : j * size + i;
      line.push(board[idx]);
    }
    if (dir === 'right' || dir === 'down') line.reverse();
    let merged = slideAndMerge(line);
    if (dir === 'right' || dir === 'down') merged.reverse();
    for (let j = 0; j < size; j++) {
      let idx = dir === 'left' || dir === 'right' ? i * size + j : j * size + i;
      if (board[idx] !== merged[j]) moved = true;
      board[idx] = merged[j];
    }
  }
  if (moved) {
    addNumber();
    updateBoard();
    updateScore();
    if (isGameOver()) {
      setTimeout(() => gameOverEl.style.display = 'flex', 300);
    }
  }
}

function slideAndMerge(row) {
  row = row.filter(val => val);
  for (let i = 0; i < row.length - 1; i++) {
    if (row[i] === row[i + 1]) {
      row[i] *= 2;
      score += row[i];
      row[i + 1] = 0;
    }
  }
  return row.filter(val => val).concat(Array(size - row.filter(val => val).length).fill(0));
}

function isGameOver() {
  for (let i = 0; i < size * size; i++) {
    if (board[i] === 0) return false;
    let x = i % size;
    let y = Math.floor(i / size);
    if (x < size - 1 && board[i] === board[i + 1]) return false;
    if (y < size - 1 && board[i] === board[i + size]) return false;
  }
  return true;
}

window.addEventListener('keydown', e => {
  if (gameOverEl.style.display === 'flex') return;
  if (e.key === 'ArrowLeft') move('left');
  else if (e.key === 'ArrowRight') move('right');
  else if (e.key === 'ArrowUp') move('up');
  else if (e.key === 'ArrowDown') move('down');
});

createBoard();
