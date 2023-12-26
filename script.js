const slider = document.querySelector(".slide")
const number = document.querySelector(".number")
const incBtn = document.querySelector(".incBtn")
const decBtn = document.querySelector(".decBtn")
let count = 0

//functions
const incFuncton = () => {
    if (count == 10) {
        return
    }else{
        count++
        number.innerText = count
        slider.style.height = `${count}0%`
    }
    console.log(count);
}
const decFuncton = () => {
    if (count == 0) {
        return
    }else{
        count--
        number.innerText = count
        slider.style.height = `${count}0%`
    }
    console.log(count);
}

//events
incBtn.addEventListener("click", incFuncton)
decBtn.addEventListener("click", decFuncton)
