const email = document.getElementById('email'),
      message = document.getElementById('message'),
      submit = document.getElementById('submit'),
      hamburger = document.querySelector('.header__hamburger'),
      menu = document.querySelector('.nav__links'),
      overlay = document.querySelector('.overlay')

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(input.value.trim())) {
    email.style.borderColor = '#C43939'
    message.classList.add('show')
  } else {
    email.style.borderColor = '#2ECC71'
    message.classList.remove('show')
  }
}

submit.addEventListener('click', function(e) {
  e.preventDefault()
  checkEmail(email)
})

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open')
  menu.classList.toggle('open')
  overlay.classList.toggle('open')
  document.body.classList.toggle('disable-scroll')
})