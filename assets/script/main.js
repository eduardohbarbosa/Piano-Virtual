const pianoKeys = document.querySelectorAll('.piano-keys .key')
const volumeSlider = document.querySelector('.volume-slider input')
const keysCheck = document.querySelector('.keys-check input')

console.log(volumeSlider)
console.log(keysCheck)

let audio = new Audio("assets/tunes/a.wav");

let mapedKeys = [];

const playTune = (key) => {
    audio.src = `assets/tunes/${key}.wav`
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")

    setTimeout(() => {
        clickedKey.classList.remove("active")
    }, 150)
};

pianoKeys.forEach((key) => {
    console.log(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));

    mapedKeys.push(key.dataset.key);
    //console.log(mapedKeys)
})

document.addEventListener('keydown', (e) => {
    if(mapedKeys.includes(e.key)){
        console.log(e.key)
        playTune(e.key)
    }
})

const handleVolume = (e) => {
    audio.volume = e.target.value
    console.log(e.target.value)
}

volumeSlider.addEventListener('input', handleVolume)

const showHideKeys = () => {
    pianoKeys.forEach((key) => {
        key.classList.toggle("hide")
    } )
}

keysCheck.addEventListener('click', showHideKeys)