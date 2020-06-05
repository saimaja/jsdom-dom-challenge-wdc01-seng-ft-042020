let pause = false
let startCounter

document.addEventListener('DOMContentLoaded', function () {
    console.log('dom is loaded')
    let form = document.getElementById('comment-form')
    form.addEventListener('submit', handleSubmit)
    let pauseButton = document.getElementById('pause')
    pauseButton.addEventListener('click', handlePause)
    startCounter = setInterval(handleCounter, 1000)
    let minus = document.getElementById('minus')
    minus.addEventListener('click', handleMinus)
    let plus = document.getElementById('plus')
    plus.addEventListener('click', handlePlus)
    let heart = document.getElementById('heart')
    heart.addEventListener('click', handleHeart)
})

function handleHeart(e) {
    e.preventDefault()
    let counter = document.getElementById('counter').innerText
    let list = document.querySelector('.likes')
   
    if (list.children.length === 0) {
        list.innerHTML += `<li id = ${counter}><span>${counter}</span> has been liked <span>1</span> times</li>`
    } else if (document.getElementById(`${counter}`)) {
    
         document.getElementById(`${counter}`).children[1].innerText++
    } else {
        list.innerHTML += `<li id = ${counter}><span>${counter}</span> has been liked <span>1</span> times</li>`
    }

}

function handleMinus(e) {
    e.preventDefault()
    let counter = document.getElementById('counter')
    if(counter.innerText > 0) {
    counter.innerText--
    }
}

function handlePlus(e) {
    e.preventDefault()
    let counter = document.getElementById('counter')
    counter.innerText++
}

function handlePause(e) {
    e.preventDefault()
    if (pause) {
        pause = false 
        startCounter = setInterval(handleCounter, 1000)
        document.getElementById('submit').disabled = false
        document.getElementById('minus').disabled = false
        document.getElementById('heart').disabled = false
        document.getElementById('plus').disabled = false
        document.getElementById('pause').innerText = 'pause'
    } else {        
        pause = true
        clearInterval(startCounter)
        document.getElementById('submit').disabled = true
        document.getElementById('minus').disabled = true
        document.getElementById('heart').disabled = true
        document.getElementById('plus').disabled = true
        document.getElementById('pause').innerText = 'resume'
    }   
    
}

function handleCounter() {
    let counter = document.getElementById('counter')
    counter.innerText++
}

function handleSubmit(e) {
    e.preventDefault()

    let text = document.getElementById('comment-input').value
    document.getElementById('comment-form').reset()
    addComment(text);

}

function addComment(text) {
    let lists = document.getElementById('list')
    let listEl = document.createElement('li')
    listEl.innerText = text

    lists.appendChild(listEl)
}