let order = [] //Random order of the colors
let clickedOrder = [] //Order of the clicks
let score = 0

//0 = green
//1 = red
//2 = yellow
//3 = blue

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

//shuffleOrder function will generate drawn numbers from 0 to 3. It creates a random order of colors
let shuffleOrder = () => {
    //colorOrder var keeps a random number by each round.
    // Math.floor will round the numbers. Math.random * 4 becaused it will always drawn a number from 0 to 3
    let colorOrder = Math.floor(Math.random() * 4)
        //**The code line bellow attributes the generated number the to next coming number. Here we will attribute the indice of the array to the color got from the function
    order[order.length] = colorOrder
    clickedOrder = []

    /**Now we will light up to drawn color */
    /**The length of the orde equals the times the for lace will run */
    for (let i in order) {
        /**For each element color created we will creat a new element for each color in the html*/
        let elementColor = createColorElement(order[i])
            /**Number i + 1 will bring a number to exist in the color list */
        lightColor(elementColor, Number(i) + 1)
    }
}

/**Lights up the next color */
let lightColor = (element, number) => {
    number = number * 500
    setTimeout(() => {
        element.classList.add('selected')
    }, number - 250)
    setTimeout(() => {
        element.classList.remove('selected')
    })
}

/**checkOrder var will compare if the orde we clicked is the exactly same order the game gave to us*/
//It verifies if the clicked buttons are the same gave by the game
let checkOrder = () => {
    /** "in" because it's iterating every indice of the array */
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            lose()
            break
        }
    }
    /**Using "==" because we are comparing different types. clickOrder is from a different array */
    if (clickedOrder.length == order.length) {
        alert(`Ponctuation: ${score}\nCorrect! Starting next level`)
        nextLevel()
    }
}

//Function to check the click of the user
let click = color => {
    //The array clickedOrder in the position it's clicked will be the color we assigned(0 1 2 3)
    clickedOrder[clickedOrder.length] = color
    createColorElement(color).classList.add('selected')
    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder()
    }, 250)
}

//Function that returns the color
let createColorElement = color => {
    if (color == 0) {
        return green
    } else if (color == 1) {
        return red
    } else if (color == 2) {
        return yellow
    } else if (color == 3) {
        return blue
    }
}

//Function for the next level. Increases the score and generates a new order.
let nextLevel = () => {
    score++
    shuffleOrder()
}

//Game over function
let gameOver = () => {
    alert(`Ponctuation: ${score}!\nYou lost. Click ok to try again`)
    order = []
    clickedOrder = []
    playGame()
}

//Function of the begining of the game
let playGame = () => {
    alert('Welcome to Genius! Starting a new game!')
    score = 0

    nextLevel()
}

// green.addEventListener('click', click(0))
// red.addEventListener('click', click(1))
// yellow.addEventListener('click', click(2))
// blue.addEventListener('click', click(3))

//Events of click for the colors
green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

playGame()