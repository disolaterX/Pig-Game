/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var activePlayer = 0
var score = [0,0]
var currentScore = 0

document.querySelector('.dice').style.display = 'none'

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    currentScore = 0
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')
}

document.querySelector('.btn-hold').addEventListener('click',function() {

        var temp = document.getElementById('score-'+activePlayer).textContent
        document.getElementById('score-'+activePlayer).textContent = (parseInt(temp)+parseInt(currentScore))
        document.querySelector('.dice').style.display = 'none'
        document.querySelector('#current-0').textContent = 0
        document.querySelector('#current-1').textContent = 0
        score[activePlayer] = parseInt(temp)+parseInt(currentScore)
        
        if ( score[activePlayer] >=10 ) {

            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner')
            document.querySelector('#name-'+activePlayer).textContent = 'Winner!'
            document.querySelector('.player-'+activePlayer+ '-panel').classList.remove('active')
            document.querySelector('.btn-roll').style.display = 'none'
            document.querySelector('.btn-hold').style.display = 'none'
        }
        else {
            nextPlayer()
        }
        
})

function showWinner() {

    document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner')
            document.querySelector('#name-'+activePlayer).textContent = 'Winner!'
            document.querySelector('.player-'+activePlayer+ '-panel').classList.remove('active')
            document.querySelector('.btn-roll').style.display = 'none'
            document.querySelector('.btn-hold').style.display = 'none'
}

document.querySelector('.btn-roll').addEventListener('click',function() {

    document.querySelector('.dice').style.display = 'block'

        var dice = Math.floor(Math.random() * 6 + 1)
        currentScore += dice
        document.querySelector('.dice').src = 'dice-'+dice+'.png'
        document.querySelector('#current-'+activePlayer).textContent = currentScore

        if ( currentScore >=10){
            showWinner()
            document.querySelector('#score-'+activePlayer).textContent = currentScore
        }

        if(dice !==1) {

        }
        else {

            document.querySelector('#current-'+activePlayer).textContent = 0
            document.getElementById('score-'+activePlayer).textContent = 0
            
            nextPlayer()

        

        }


})

