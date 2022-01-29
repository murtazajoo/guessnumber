let rendom = document.getElementById('random')
let total = document.getElementById('total')
let input = document.getElementById('input')
let samllNumber = 10
let BigNumber = 100
let correct = 0
let incorrect = 0




//update score

function correctScore() {
   
    correct += 1
   document.getElementById('correct').textContent 
    = correct
}
function incorrectScore() {
    incorrect += 1
    document.getElementById('incorrect').textContent = incorrect

}


// check the answer

function check() {

    if (parseInt( input.value) + parseInt(rendom.textContent) === parseInt( total.textContent)) {
        console.log('won')
    correctScore()
document.getElementById('finalresult').style.display="flex"
    }
    else {
document.getElementById('finalincorrect').style.display="flex"

        incorrectScore()
        console.log("lose")
    }
}


// change lvl

function lvl(num) {
    samllNumber = num
    BigNumber = num * 10
    randomFun()

}



// generate random number

function randomFun() {
document.getElementById('finalresult').style.display="none"

    let randomNumber = Math.floor(Math.random() * samllNumber)
    let totalNumber = Math.floor(Math.random() * BigNumber)
    rendom.textContent = randomNumber
    total.textContent = totalNumber
    input.value = ""
    
} 

randomFun()