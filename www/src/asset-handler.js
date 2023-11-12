import eatSound from '../assets/audio/point.mp3'

export function playEatSound() {
    playSound(eatSound)
}

function playSound(sound) {
    var audio = new Audio(sound)
    audio.play()
}