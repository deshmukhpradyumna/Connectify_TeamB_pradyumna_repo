let h3 = document.querySelector("h3");
let gameseq = [];
let userseq = [];
let level = 0;
let started = false;

const btns = ["yellow", "red", "purple", "green"];

document.addEventListener("keypress", () => {
  if (!started) {
    h3.innerText = "Level 0";
    level = 0;
    gameseq = [];
    userseq = [];
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 400);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(() => {
    btn.classList.remove("userflash");
  }, 300);
}

function levelUp() {
  userseq = [];
  level++;
  h3.innerText = `Level: ${level}`;

  const randIdx = Math.floor(Math.random() * btns.length);
  const randColor = btns[randIdx];
  const randbtn = document.querySelector(`.${randColor}`);

  gameseq.push(randColor);

  setTimeout(() => {
    gameFlash(randbtn);
  }, 500);
}

function checkAns(idx) {
  if (userseq[idx] !== gameseq[idx]) {
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
      document.body.style.backgroundColor = "white";
    }, 200);

    h3.innerHTML = `Game Over! Your score was <b>${level}</b><br> Press any key to start again`;
    reset();
  } else {
    console.log("correct");
    if (userseq.length === gameseq.length) {
      setTimeout(() => {
        levelUp();
      }, 1000);
    }
  }
}

function btnPress(event) {
  let btn = this;
  userFlash(btn);
  const userColor = btn.classList[1];

  if (userseq.length === gameseq.length) {
    checkAns(userseq.length - 1);
  }

  event.stopPropagation(); 
}

const allBtns = document.querySelectorAll('.btn');
for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  level = 0;
  gameseq = [];
  userseq = [];
  started = false;
  h3.innerText = "Press Any Key to Start";
}
