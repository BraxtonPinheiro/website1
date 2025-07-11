const main = document.querySelector('main')
const voicesSelect = document.getElementById('voices')
const textarea = document.getElementById('text')
const readBtn = document.getElementById('read')
const toggleBtn = document.getElementById('toggle')
const closeBtn = document.getElementById('close')

const data = [
    {
        image: 'drink.jpg',
        text: "I'm thirsty"
    },
    {
        image: 'food.jpg',
        text: "I'm hungry"
    },
    {
        image: 'tired.jpg',
        text: "I'm tired"
    },
    {
        image: 'hurt.jpg',
        text: "I'm hurt"
    },
    {
        image: 'happy.jpg',
        text: "I'm happy"
    },
    {
        image: 'angry.jpg',
        text: "I'm angry"
    },
    {
        image: 'sad.jpg',
        text: "I'm sad"
    },
    {
        image: 'scared.jpg',
        text: "I'm scared"
    },
    {
        image: 'outside.jpg',
        text: "I want to go outside"
    },
    {
        image: 'home.jpg',
        text: "I want to go home"
    },
    {
        image: 'school.jpg',
        text: "I want to go to school"
    },
    {
        image: 'grandma.jpg',
        text: "I want to go to grandma's"
    },
]

data.forEach(createBox)

function createBox(item) {
    const box = document.createElement('div')
    box.classList.add('box')
    box.innerHTML = `
        <img src="${item.image}" alt="${item.text}" />
        <p class="info"> ${item.text}</p>
    `

    box.addEventListener('click', ()=> {
        setTextMessage(item.text)
        speakText()


        //add active effect
        box.classList.add('active')
        setTimeout( () => box.classList.remove('active'), 800)


    })

    main.appendChild(box)
}



//initialize speech synthesis
const message = new SpeechSynthesisUtterance()

//set text
function setTextMessage(text) {
    message.text= text
}


//speak text
function speakText() {
    speechSynthesis.speak(message)
}


//toggle text box
toggleBtn.addEventListener('click', ()=>{
    document.getElementById('text-box').classList.toggle('show')
})

//close box
closeBtn.addEventListener('click', ()=>{
    document.getElementById('text-box').classList.remove('show')
})

let voices = []



function getVoices() {
    voices = speechSynthesis.getVoices();
    voicesSelect.innerHTML = '';

    voices.forEach(voice => {
        const option = document.createElement('option');
        option.value = voice.name;
        option.innerText = `${voice.name} (${voice.lang})`;
        voicesSelect.appendChild(option);
    });

    if (voices.length > 0) {
        message.voice = voices[0];
        voicesSelect.value = voices[0].name;
    }
}

//voices changed
speechSynthesis.addEventListener('voiceschanged', getVoices)


//change voice
voicesSelect.addEventListener('change', setVoice)


//set voice function
function setVoice(e) {
    message.voice = voices.find(voice => voice.name == e.target.value)
}


getVoices()

//read text button
readBtn.addEventListener('click', ()=> {
    setTextMessage(textarea.value)
    speakText()
})
