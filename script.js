// number of users on setup

const userNumberButtons = document.querySelectorAll('.btn-create-number')
let userNumber;
function userNumberClick() {
    userNumber = this.value
    console.log(`Number of users: ${userNumber}`)
}
userNumberButtons.forEach(e => {
    e.addEventListener('click', userNumberClick)

})
// start button

const startButton = document.getElementById('start')
startButton.addEventListener('click', start)
function start() {
    if(userNumber) {
        console.log('Starting...')
        document.getElementById('welcome').style.visibility = "hidden"
        document.getElementById('welcome').style.height = "0"
        document.getElementById('tracker').style.visibility = "visible"

    } else {
        console.log('Please select number of users then press Start again.')
    }
}