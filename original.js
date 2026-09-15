choose = document.getElementById('choose')
paper = document.getElementById('topl')
scissors = document.getElementById('topr')
rock = document.getElementById('bottom')
user_choose = document.getElementById('user_choose')
for_game = document.getElementById('for_game')
ld = document.getElementById('ld')
rd = document.getElementById('rd')
middle = document.getElementById('middle')
text = document.getElementById('text')
computer_choose = document.getElementById('computer_choose')
play_again_btn = document.getElementById('play_again_btn')
bottom = document.getElementById('bottom')
score = document.getElementById('score')
clos = document.getElementById('close')
btn2 = document.getElementById('btn2')
rule = document.getElementById('rule')

play_again = () => {
    choose.style.display = 'block'
    for_game.style.display = 'none'
    ld.classList.remove("ld1", "paper", "rock", "scissors")
    rd.classList.remove("rd1", "paper", "rock", "scissors")
}

choose_paper = () => {
    if (getComputedStyle(choose).display === 'block') {
        for_rand = ["./images/icon-paper.svg", "./images/icon-scissors.svg", "./images/icon-rock.svg"]
        rand = Math.floor(Math.random() * 3)
        choose.style.display = 'none'
        for_game.style.display = 'block'
        ld.classList.add("ld1", "paper");
        console.log(ld);
        console.log(ld.className);
        middle.style.display = 'block'
        computer_choose.src = for_rand[rand]
        user_choose.src = "./images/icon-paper.svg"
        switch (for_rand[rand]) {
            case './images/icon-paper.svg':
                text.textContent = 'Draw'
                rd.style.boxShadow = '0px 0px 0px 20px #546FF4'
                rd.classList.add("rd1", "paper");
                break;
            case "./images/icon-scissors.svg":
                if (Number(score.textContent) <= 0) {
                    score.textContent = 0
                } else {
                    score.textContent = Number(score.textContent) - 1;
                }
                text.textContent = 'You Lose'
                rd.style.boxShadow = '0px 0px 0px 20px #EFA421'
                rd.classList.add("rd1", "scissors");
                break;
            case "./images/icon-rock.svg":
                score.textContent = Number(score.textContent) + 1;
                text.textContent = 'You Win'
                rd.style.boxShadow = '0px 0px 0px 20px #d7334e'
                rd.classList.add("rd1", "rock");
                break;
        }
    }
}


choose_rock = () => {
    if (getComputedStyle(choose).display === 'block') {
        for_rand = ["./images/icon-paper.svg", "./images/icon-scissors.svg", "./images/icon-rock.svg"]
        rand = Math.floor(Math.random() * 3)
        choose.style.display = 'none'
        for_game.style.display = 'block'
        ld.classList.add("ld1", "rock");
        middle.style.display = 'block'
        computer_choose.src = for_rand[rand]
        user_choose.src = "./images/icon-rock.svg"
        switch (for_rand[rand]) {
            case './images/icon-paper.svg':
                if (Number(score.textContent) <= 0) {
                    score.textContent = 0
                } else {
                    score.textContent = Number(score.textContent) - 1;
                }
                text.textContent = 'You Lose'
                rd.style.boxShadow = '0px 0px 0px 20px #546FF4'
                rd.classList.add("rd1", "paper");
                break;
            case "./images/icon-scissors.svg":
                score.textContent = Number(score.textContent) + 1;
                text.textContent = 'You Win'
                rd.style.boxShadow = '0px 0px 0px 20px #EFA421'
                rd.classList.add("rd1", "scissors");
                break;
            case "./images/icon-rock.svg":
                text.textContent = 'Draw'
                rd.style.boxShadow = '0px 0px 0px 20px #d7334e'
                rd.classList.add("rd1", "rock");
                break;
        }
    }
}


choose_scissors = () => {
    if (getComputedStyle(choose).display === 'block') {
        for_rand = ["./images/icon-paper.svg", "./images/icon-scissors.svg", "./images/icon-rock.svg"]
        rand = Math.floor(Math.random() * 3)
        choose.style.display = 'none'
        for_game.style.display = 'block'
        ld.classList.add("ld1", "scissors");
        middle.style.display = 'block'
        computer_choose.src = for_rand[rand]
        user_choose.src = "./images/icon-scissors.svg"
        switch (for_rand[rand]) {
            case './images/icon-paper.svg':
                score.textContent = Number(score.textContent) + 1;
                text.textContent = 'You Win'
                rd.style.boxShadow = '0px 0px 0px 20px #546FF4'
                rd.classList.add("rd1", "paper");
                break;
            case "./images/icon-scissors.svg":
                text.textContent = 'Draw'
                rd.style.boxShadow = '0px 0px 0px 20px #EFA421'
                rd.classList.add("rd1", "scissors");
                break;
            case "./images/icon-rock.svg":
                if (Number(score.textContent) <= 0) {
                    score.textContent = 0
                } else {
                    score.textContent = Number(score.textContent) - 1;
                }
                text.textContent = 'You Lose'
                rd.style.boxShadow = '0px 0px 0px 20px #d7334e'
                rd.classList.add("rd1", "rock");
                break;
        }
    }
}

open_rule = () => {
    rule.style.display = 'flex'
}

close_rule = () => {
    rule.style.display = 'none'
}


paper.addEventListener('click', () => {
    choose_paper()
})

bottom.addEventListener('click', () => {
    choose_rock()
})

scissors.addEventListener('click', () => {
    choose_scissors()
})

play_again_btn.addEventListener('click', () => {
    play_again()
})

clos.addEventListener('click', () => {
    close_rule()
})

btn2.addEventListener('click', () => {
    open_rule()
})