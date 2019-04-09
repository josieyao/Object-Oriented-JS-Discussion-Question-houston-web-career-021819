const eventArea = document.getElementById('event_area')
const imageArea = document.getElementById('image_area')
const unicorn = new Unicorn('Rainbow', 'HR Director')


const restartButton = document.getElementById('restart').addEventListener("click",()=> unicorn.restart()
)
const attackButton = document.getElementById('attack').addEventListener("click",()=> unicorn.attack())

const defendButton = document.getElementById('defend').addEventListener("click",()=> unicorn.defend())

const healButton = document.getElementById('heal').addEventListener("click",()=> unicorn.heal())

const breakdanceButton = document.getElementById('breakdance').addEventListener("click",()=> unicorn.breakdance())

const eatButton = document.getElementById('eat').addEventListener("click",()=> unicorn.eatCronut())

