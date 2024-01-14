document.querySelector('#yell').addEventListener('click', run);

function run() {
  const fName = document.querySelector('#firstName').value
  const fMiddle = document.querySelector('#firstName').value
  const lMiddle = document.querySelector('#firstName').value
  const lName = document.querySelector('#firstName').value
  const yellText = document.querySelector('#placeToYell');

  yellText.innerText = `${fName} ${fMiddle} ${lMiddle} ${lName}`
}