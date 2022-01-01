const adjective1 = document.querySelector("#adj1")
const adjective2 = document.querySelector("#adj2")
const verb = document.querySelector("#verb")
const noun = document.querySelector("#noun1")
const adjective3 = document.querySelector("#adj3")
const noun2 = document.querySelector("#noun2")
const adj4 = document.querySelector("#adj4")
const submit = document.querySelector(".submit")
const text = document.querySelector(".text")
const paragraph = document.querySelector(".original")
const button = document.querySelector("button")
const span1 = document.querySelector(".first")
const span2 = document.querySelector(".second")
const span3 = document.querySelector(".third")
const span4 = document.querySelector(".fourth")
const span5 = document.querySelector(".fifth")
const span6 = document.querySelector(".sixth")
const span7 = document.querySelector(".seventh")
const span8 = document.querySelector(".eigth")

const fillWithWords = (e) => {
    e.preventDefault();
    span1.textContent = adjective1.value
    span2.textContent = adjective1.value
    span3.textContent = adjective2.value
    span4.textContent = verb.value
    span5.textContent = noun.value
    span6.textContent = adjective3.value
    span7.textContent = noun2.value
    span8.textContent = adj4.value


    text.style.opacity = "1";
    text.style.transition = '.5s ease'

}

const original = () => {
     
        paragraph.classList.toggle('active') 

        if (button.innerText === 'See original text'){
            button.innerText = 'Hide original text'
        }

        else {
            button.innerText = 'See original text'
        }

}

console.log(button.className)

submit.addEventListener('click', fillWithWords)
button.addEventListener('click', original)
