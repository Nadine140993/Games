const input = document.querySelector('.input')
const button = document.querySelector('.enter-button')
const inputField = document.querySelector('.input-field')
const imageContainer = document.querySelector('.animal')
const livesMessage = document.querySelector('.lives')

const image = [
    {imgSrc: "./78745131.jpeg", name: 'giraffe'},
    {imgSrc: "./_115752372_octopus3-suedaly-isleofman.jpeg", name: 'octopus'},
    {imgSrc: "./GTY_rabbit_sr_140508_16x9_1600.jpeg", name: 'rabbit'},
    {imgSrc: "./How-to-Get-Rid-of-Armadillos.jpeg", name: 'armadillo'},
    {imgSrc: "./squirrel-animal-cute-rodents-47547.jpeg", name: 'squirrel'},
    {imgSrc: "./unicorn3.jpeg", name: 'unicorn'},
    {imgSrc: "./images.jpeg", name: 'eagle'},
    {imgSrc: "./file-20210915-23-ccdc2l.jpeg", name: 'sloth'},
    {imgSrc: "./anteater.jpeg", name: 'anteater'},
    {imgSrc: "./53e8e08c6e9e452dafd4b8ed20fb08c8-750.png", name: 'ostrich'},
    {imgSrc: "./280850-1600x1066-fun-chameleon-facts.jpeg", name: 'chameleon'},
    {imgSrc: "./thumbs_b_c_053ed3a08f1248dbe14655390c8743ab.jpeg", name:'owl'},
    {imgSrc: "./seagull.jpeg", name: 'seagull'},
    {imgSrc: "./download.jpeg", name: 'comodo dragon'},
    {imgSrc: "./whale-gty-jt-191219_hpMain_16x9_992.jpeg", name: 'whale'},
    {imgSrc: "./2560px-Fennec_Fox_Vulpes_zerda.jpeg", name: 'fennec fox'},
    {imgSrc: "./salish-sea-orca-L-pod.png", name: 'orca'},
    {imgSrc: "./stingray-ocean-floor.webp", name: 'stingray'},
]
let lives = 3;
let index = 0;
let correct = 1;


const getImage = () => {
    image.sort(()=> Math.random() - 0.5)
    imageContainer.src = image[index].imgSrc
    }

getImage(); 

button.addEventListener('mousedown', (e) => { 

    if (correct === 4) {
        document.querySelector("h1").textContent = "You win! Play Again?"
        button.innerHTML = 'Play again'
        imageContainer.style.display = 'none';
        e.target.addEventListener('mousedown', newGame)
            }


    if (input.value.toLowerCase().trim() === image[index].name) {
    
    const answers = document.createElement('div')
    answers.classList.toggle("answers")
    
     const answerImage = document.createElement('img');
     answerImage.setAttribute("src", image[index].imgSrc);
     answerImage.setAttribute("width", "150px");
     answerImage.classList.toggle('answer-img')

     answers.appendChild(answerImage)
 
 
    const answerText = document.createElement('p');
    answerText.textContent = input.value;
    answers.appendChild(answerText)

    document.querySelector('.answer-wrapper').appendChild(answers)


    input.value = '';
    correct++
    getImage(); 

    } else {
       input.classList.toggle('border') 
        input.value = '';
        lives--
        livesMessage.textContent = `Lives: ${lives}`
    }


    if (lives === 0) {
        document.querySelector("h1").textContent = "Sorry, you lost. Play again?"
       button.innerHTML = 'Play again'
       imageContainer.style.display = 'none';
       e.target.addEventListener('mousedown', newGame)
                          }

    setTimeout(function() {input.classList.remove('border')}, 1000)
})


const newGame = ( ()=> {
    location.reload()
}
)

