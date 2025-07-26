// let myNum = document.getElementById("count-el")
// let myBtn = document.getElementById("increment-btn")
// let reset = document.getElementById("reset")

// let count = 0

// myBtn.addEventListener("click", increment)
// reset.addEventListener("click", resetBtn)

// function increment() {
//   count = count + 1
//   myNum.innerText = count
// }

// function resetBtn() {
//   console.log("reset button clicked")
//   count = 0
//   myNum.innerText = count
// }

let countEl = document.getElementById("count-el")
let para = document.getElementById("save-el")
let count = 0

function increment() {
  count += 1
  countEl.textContent = count
}

// 1. Create a function, save(), which logs out the count when it's called.

// 2. Create a variable that contains both the count and the dash separator, i.e. "12 -"
// 3. Render the variable in the saveEl using innerText
// NB: Make sure to not delete the existing content of the paragraph
// function save() {
//   let myVar = "- " + count
//   console.log(myVar)

//   // para.append(myVar)

//   para.innerText = para.innerText + myVar

//   console.log(para.innerText + myVar)
// }

function save() {
  let countStr = count + " - "
  para.textContent += countStr

  // two lines of code to zero out people count.
  countEl.textContent = 0
  count = 0
}
