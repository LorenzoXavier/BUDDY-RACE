const handleKey = (event) => {
  const items = document.querySelector('#player1_race .active');
  const nextElement = items.nextElementSibling;
  const lastElement = document.querySelector('#player1_race .finish');

  if (lastElement.classList.contains("active") == false) {
    items.classList.remove("active");
    nextElement.classList.add("active");
    const audio = new Audio("images/george.wav");
    audio.play();
  } else {
    alert("George wins");
    // location.reload();
  }
};

const handleKey2 = (event) => {
  const items = document.querySelector('#player2_race .active');
  const nextElement = items.nextElementSibling;
  const lastElement = document.querySelector('#player2_race .finish');

  if (lastElement.classList.contains("active") == false) {
    items.classList.remove("active");
    nextElement.classList.add("active");
    const audio = new Audio("images/lorenzo.wav");
    audio.play();
  } else {
    alert("Lorenzo wins");
    // location.reload();
  }
};

document.addEventListener("keyup", (e) => {
  if (e.keyCode === 71) {
    handleKey();
  }
  if (e.keyCode === 76) {
    handleKey2();
  }
});
