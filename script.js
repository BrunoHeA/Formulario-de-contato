const formulario = document.querySelector('.principal')
const erro = document.querySelectorAll('.erro')
const erroEmail = document.querySelector('.erro-email')
const email = document.querySelector('input[type="email"]')
const text = document.querySelectorAll('input[type="text"]')
const radio = document.querySelector('input[type="radio"]')
const mensagem = document.querySelector('textarea')
const checkbox = document.querySelector('input[type="checkbox"]')

erro.forEach(function(el) {
    el.style.display = 'none';
});

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault()

    
})