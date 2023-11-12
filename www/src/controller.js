import { Movement } from 'rust-js-dachshund-game'

const MOVEMENT_KEYS = {
    [Movement.TOP]: ['W', 'ArrowUp'],
    [Movement.DOWN]: ['S', 'ArrowDown'],
    [Movement.LEFT]: ['A', 'ArrowLeft'],
    [Movement.RIGHT]: ['D', 'ArrowRight']
}

const STOP_KEY = ' '

export class Controller {
    constructor(onStop = () => {}) {
        window.addEventListener('keydown', (event) => {
            this.movement = Object.entries(MOVEMENT_KEYS).find(([_, keys]) => keys.includes(event.key))?.[0];
            //console.log(this.movement)
        })
        window.addEventListener('keyup', (event) => {
            console.log(event.key)
            this.movement = undefined
            if (event.key === STOP_KEY) {
                onStop()
                console.log("space");
            }
        })
    }
}