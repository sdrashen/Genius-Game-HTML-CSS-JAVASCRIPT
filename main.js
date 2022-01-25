let order = []
let clickedOrder = []
let score = 0

//0 = green
//1 = red
//2 = yellow
//3 = blue

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

//shuffleOrder function will generate drawn numbers from 0 to 3
let shuffleOrder = () => {
    /*colorOrder var keeps a random number by each round.
                                Math.floor will round the numbers. Math.random * 4 becaused it will always drawn a number from 0 to 3*/
    let colorOrder = Math.floor(Math.random() * 4)
        /**The code line bellow attributes the generated number the to next coming number. Here we will attribute the indice of the array to the color got from the function */
    order[order.length] = colorOrder
    clickedOrder = []

    /**Now we will light up to dwan color */
    for (let i in order) {
        /**For each element color created we will creat a new element for each color in the html*/
        let elementColor = createColorElement(order[i])
            /**Number i + 1 will bring a number to exist in the color list */
        lightColor(elementColor, Number(i) + 1)
    }
}

let lightColor = (element, number) => {
    time = time * 500
    setTimeout(() => {}, tempo)
}