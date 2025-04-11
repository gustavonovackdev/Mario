const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const botao = document. querySelector('.botao');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}   

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(pipePosition);

    if (pipePosition <= 120 && pipePosition >0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'https://imgur.com/a/oOaWyc3';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        if(pipePosition <= 120 && pipePosition >0 && marioPosition < 80) {
            botao.style.display = 'block';
            botao.addEventListener('click', () => {
                location.reload();
            })
        }

        clearInterval(loop);
    }
}, 10)



document.addEventListener('keydown', jump);
