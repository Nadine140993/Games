const adjective1 = document.querySelector("#adj1")
const adjective2 = document.querySelector("#adj2")
const verb = document.querySelector("#verb")
const noun = document.querySelector("#noun1")
const adjective3 = document.querySelector("#adj3")
const noun2 = document.querySelector("#noun2")
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

const fillWithWords = (e) => {
    e.preventDefault();
    span1.textContent = adjective1.value.toLowerCase()
    span2.textContent = adjective2.value.toLowerCase()
    span3.textContent = verb.value.toLowerCase()
    span4.textContent = noun.value.toLowerCase()
    span5.textContent = adjective3.value.toLowerCase()
    span6.textContent = noun2.value.toLowerCase()



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
