choose = document.getElementById('choose')
scdiv = document.getElementById('scdiv')
padiv = document.getElementById('padiv')
spdiv = document.getElementById('spdiv')
lidiv = document.getElementById('lidiv')
rodiv = document.getElementById('rodiv')
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
}

choose_paper = () => {
    if (getComputedStyle(choose).display === 'block') {
        for_rand = ["./images/icon-paper.svg", "./images/icon-scissors.svg", "./images/icon-rock.svg", "./images/icon-spock.svg", "./images/icon-lizard.svg"]
        rand = Math.floor(Math.random() * 5)
        choose.style.display = 'none'
        for_game.style.display = 'block'
        ld.style.boxShadow = '0px 0px 0px 20px #546FF4'
        middle.style.display = 'block'
        computer_choose.src = for_rand[rand]
        console.log(for_rand[rand]);
        user_choose.src = "./images/icon-paper.svg"
        switch (for_rand[rand]) {
            case './images/icon-paper.svg':
                text.textContent = 'Draw'
                rd.style.boxShadow = '0px 0px 0px 20px #546FF4'
                break;
            case "./images/icon-scissors.svg":
                if (Number(score.textContent) <= 0) {
                    score.textContent = 0
                } else {
                    score.textContent = Number(score.textContent) - 1;
                }
                text.textContent = 'You Lose'
                rd.style.boxShadow = '0px 0px 0px 20px #EFA421'
                break;
            case "./images/icon-rock.svg":
                score.textContent = Number(score.textContent) + 1;
                text.textContent = 'You Win'
                rd.style.boxShadow = '0px 0px 0px 20px #d7334e'
                break;
            case "./images/icon-spock.svg":
                score.textContent = Number(score.textContent) + 1;
                text.textContent = 'You Win'
                rd.style.boxShadow = '0px 0px 0px 20px #4EBDD0'
                break;
            case "./images/icon-lizard.svg":
                if (Number(score.textContent) <= 0) {
                    score.textContent = 0
                } else {
                    score.textContent = Number(score.textContent) - 1;
                }
                text.textContent = 'You Lose'
                rd.style.boxShadow = '0px 0px 0px 20px #8858E2'
                break;
        }
    }
}


choose_rock = () => {
    if (getComputedStyle(choose).display === 'block') {
        for_rand = ["./images/icon-paper.svg", "./images/icon-scissors.svg", "./images/icon-rock.svg", "./images/icon-spock.svg", "./images/icon-lizard.svg"]
        rand = Math.floor(Math.random() * 5)
        choose.style.display = 'none'
        for_game.style.display = 'block'
        ld.style.boxShadow = '0px 0px 0px 20px #d7334e'
        middle.style.display = 'block'
        computer_choose.src = for_rand[rand]
        console.log(for_rand[rand]);
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
                break;
            case "./images/icon-scissors.svg":
                score.textContent = Number(score.textContent) + 1;
                text.textContent = 'You Win'
                rd.style.boxShadow = '0px 0px 0px 20px #EFA421'
                break;
            case "./images/icon-rock.svg":
                text.textContent = 'Draw'
                rd.style.boxShadow = '0px 0px 0px 20px #d7334e'
                break;
            case "./images/icon-spock.svg":
                if (Number(score.textContent) <= 0) {
                    score.textContent = 0
                } else {
                    score.textContent = Number(score.textContent) - 1;
                }
                text.textContent = 'You Lose'
                rd.style.boxShadow = '0px 0px 0px 20px #4EBDD0'
                break;
            case "./images/icon-lizard.svg":
                score.textContent = Number(score.textContent) + 1;
                text.textContent = 'You Win'
                rd.style.boxShadow = '0px 0px 0px 20px #8858E2'
                break;
        }
    }
}


choose_scissors = () => {
    if (getComputedStyle(choose).display === 'block') {
        for_rand = ["./images/icon-paper.svg", "./images/icon-scissors.svg", "./images/icon-rock.svg", "./images/icon-spock.svg", "./images/icon-lizard.svg"]
        rand = Math.floor(Math.random() * 5)
        choose.style.display = 'none'
        for_game.style.display = 'block'
        ld.style.boxShadow = '0px 0px 0px 20px #EFA421'
        middle.style.display = 'block'
        computer_choose.src = for_rand[rand]
        console.log(for_rand[rand]);
        user_choose.src = "./images/icon-scissors.svg"
        switch (for_rand[rand]) {
            case './images/icon-paper.svg':
                score.textContent = Number(score.textContent) + 1;
                text.textContent = 'You Win'
                rd.style.boxShadow = '0px 0px 0px 20px #546FF4'
                break;
            case "./images/icon-scissors.svg":
                text.textContent = 'Draw'
                rd.style.boxShadow = '0px 0px 0px 20px #EFA421'
                break;
            case "./images/icon-rock.svg":
                if (Number(score.textContent) <= 0) {
                    score.textContent = 0
                } else {
                    score.textContent = Number(score.textContent) - 1;
                }
                text.textContent = 'You Lose'
                rd.style.boxShadow = '0px 0px 0px 20px #d7334e'
                break;
            case "./images/icon-spock.svg":
                if (Number(score.textContent) <= 0) {
                    score.textContent = 0
                } else {
                    score.textContent = Number(score.textContent) - 1;
                }
                text.textContent = 'You Lose'
                rd.style.boxShadow = '0px 0px 0px 20px #4EBDD0'
                break;
            case "./images/icon-lizard.svg":
                score.textContent = Number(score.textContent) + 1;
                text.textContent = 'You Win'
                rd.style.boxShadow = '0px 0px 0px 20px #8858E2'
                break;
        }
    }
}


choose_spock = () => {
    if (getComputedStyle(choose).display === 'block') {
        for_rand = ["./images/icon-paper.svg", "./images/icon-scissors.svg", "./images/icon-rock.svg", "./images/icon-spock.svg", "./images/icon-lizard.svg"]
        rand = Math.floor(Math.random() * 5)
        choose.style.display = 'none'
        for_game.style.display = 'block'
        ld.style.boxShadow = '0px 0px 0px 20px #4EBDD0'
        middle.style.display = 'block'
        computer_choose.src = for_rand[rand]
        console.log(for_rand[rand]);
        user_choose.src = "./images/icon-spock.svg"
        switch (for_rand[rand]) {
            case './images/icon-scissors.svg':
                score.textContent = Number(score.textContent) + 1;
                text.textContent = 'You Win'
                rd.style.boxShadow = '0px 0px 0px 20px #EFA421'
                break;
            case "./images/icon-paper.svg":
                if (Number(score.textContent) <= 0) {
                    score.textContent = 0
                } else {
                    score.textContent = Number(score.textContent) - 1;
                }
                text.textContent = 'You Lose'
                rd.style.boxShadow = '0px 0px 0px 20px #546FF4'
                break;
            case "./images/icon-rock.svg":
                score.textContent = Number(score.textContent) + 1;
                text.textContent = 'You Win'
                rd.style.boxShadow = '0px 0px 0px 20px #d7334e'
                break;
            case "./images/icon-spock.svg":
                text.textContent = 'Draw'
                rd.style.boxShadow = '0px 0px 0px 20px #4EBDD0'
                break;
            case "./images/icon-lizard.svg":
                if (Number(score.textContent) <= 0) {
                    score.textContent = 0
                } else {
                    score.textContent = Number(score.textContent) - 1;
                }
                text.textContent = 'You Lose'
                rd.style.boxShadow = '0px 0px 0px 20px #8858E2'
                break;
        }
    }
}


choose_lizard = () => {
    if (getComputedStyle(choose).display === 'block') {
        for_rand = ["./images/icon-paper.svg", "./images/icon-scissors.svg", "./images/icon-rock.svg", "./images/icon-spock.svg", "./images/icon-lizard.svg"]
        rand = Math.floor(Math.random() * 5)
        choose.style.display = 'none'
        for_game.style.display = 'block'
        ld.style.boxShadow = '0px 0px 0px 20px #8858E2'
        middle.style.display = 'block'
        computer_choose.src = for_rand[rand]
        console.log(for_rand[rand]);
        user_choose.src = "./images/icon-lizard.svg"
        switch (for_rand[rand]) {
            case './images/icon-paper.svg':
                score.textContent = Number(score.textContent) + 1;
                text.textContent = 'You Win'
                rd.style.boxShadow = '0px 0px 0px 20px #546FF4'
                break;
            case "./images/icon-scissors.svg":
                if (Number(score.textContent) <= 0) {
                    score.textContent = 0
                } else {
                    score.textContent = Number(score.textContent) - 1;
                }
                text.textContent = 'You Lose'
                rd.style.boxShadow = '0px 0px 0px 20px #EFA421'
                break;
            case "./images/icon-rock.svg":
                if (Number(score.textContent) <= 0) {
                    score.textContent = 0
                } else {
                    score.textContent = Number(score.textContent) - 1;
                }
                text.textContent = 'You Lose'
                rd.style.boxShadow = '0px 0px 0px 20px #d7334e'
                break;
            case "./images/icon-spock.svg":
                score.textContent = Number(score.textContent) + 1;
                text.textContent = 'You Win'
                rd.style.boxShadow = '0px 0px 0px 20px #4EBDD0'
                break;
            case "./images/icon-lizard.svg":
                text.textContent = 'Draw'
                rd.style.boxShadow = '0px 0px 0px 20px #8858E2'
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


padiv.addEventListener('click', () => {
    choose_paper()
})

rodiv.addEventListener('click', () => {
    choose_rock()
})

scdiv.addEventListener('click', () => {
    choose_scissors()
})

lidiv.addEventListener('click', () => {
    choose_lizard()
})

spdiv.addEventListener('click', () => {
    choose_spock()
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