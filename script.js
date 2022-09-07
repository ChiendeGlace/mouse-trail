const body = document.querySelector('body');
const button = document.createElement('button');
button.classList.add('btn');
button.textContent = 'CLICK TO START';
body.appendChild(button);
button.addEventListener('click', removeButton);
function removeButton(e) {
  body.removeChild(button);
  const redBox = document.createElement('div');
  redBox.classList.add('red');
  body.appendChild(redBox);
  const blueBox = document.createElement('div');
  blueBox.classList.add('blue');
  body.appendChild(blueBox);
  const greenBox = document.createElement('div');
  greenBox.classList.add('green');
  body.appendChild(greenBox);
  const mouseTrail = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    redBox.style.left = x + 5 + 'px';
    redBox.style.top = y + 5 + 'px';
    blueBox.style.top = y + 15 + 'px';
    blueBox.style.left = x + 15 + 'px';
    greenBox.style.left = x + 20 + 'px';
    greenBox.style.top = y + 20 + 'px';
  };

  const restartFunction = (e) => {
    document.removeEventListener('mousemove', mouseTrail);
    body.appendChild(button);
    body.removeChild(redBox);
    body.removeChild(blueBox);
    body.removeChild(greenBox);
  };
  document.addEventListener('mousemove', mouseTrail);
  document.addEventListener('dblclick', restartFunction);
};