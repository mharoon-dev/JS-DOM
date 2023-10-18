// //lamp on and off

// // let onBtn = document.getElementById('on')
// // let offBtn = document.getElementById('off')
// // let image = document.getElementById('image')



// // function on() {
// //     onBtn.style.display = 'none'
// //     offBtn.style.display = 'block'
// //     image.src = './images/with light.png'
// // }


// // function off() {
// //     offBtn.style.display = 'none'
// //     onBtn.style.display = 'block'
// //     image.src = "./images/without light (1).png"
// // }


// // task (change background color) 

// let body = document.querySelector('body')
// let h1 = document.querySelector('.h1')
// let h1Div = document.querySelector('.h1-div')
// let colors = [
//     "red",
//     "green",
//     "blue",
//     "yellow",
//     "yellow",
//     "grey",
//     "black",
//     "pink",
// ]
// function changeTheColor() {
//     let change = colors[Math.floor(Math.random() * colors.length)]
//     body.style.backgroundColor = change
//        h1.textContent = change
//        if (change == "black") {
//         h1Div.style.backgroundColor = "white"
//         h1.style.color = "black"
//     } else {
//         h1Div.style.backgroundColor = "black"
//         h1.style.color = "white"
//        }
// }


// // task (counter) 
// let number = 0
// let counter = document.querySelector("#counter")
// let decrease = document.querySelector("#decrease")
// let reset = document.querySelector("#reset")
// let increase = document.querySelector("#increase")

// function increaseNum() {
//     ++number
//     counter.innerHTML = number
//     counter.style.color = "green"
// }

// function decreaseNum() {
//     if (number >  0) {
//         --number
//         counter.innerHTML = number
//         counter.style.color = "red"
//     } 
    
// }

// function resetNum() {
//     number = 0
//     counter.innerHTML = number
//     counter.style.color = "black"
// }


// nav bar

let webPages = document.querySelector(".webPages")
let leftSide = document.querySelector(".leftSide")
let togglerBtn = document.querySelector(".togglerBtn")


function navbar() {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 992 ) {
        webPages.style.display = "none";
        leftSide.style.display = "none";
        togglerBtn.style.display = "block";
    } else {
        webPages.style.display = "block";
        leftSide.style.display = "flex";
        togglerBtn.style.display = "none";
    }
  }
navbar();

window.addEventListener('resize', navbar);
