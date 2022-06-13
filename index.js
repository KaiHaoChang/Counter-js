let value = document.querySelector('.value')
document.addEventListener('click', (e) => {
  let anwser = parseInt(value.innerHTML)
  if (e.target.classList.contains('increase')) {
    value.innerHTML = anwser + 1
  } else if (e.target.classList.contains('decrease')) {
    value.innerHTML = anwser - 1
  } else if (e.target.classList.contains('reset')) {
    value.innerHTML = 0
  } else {
    return
  }
})