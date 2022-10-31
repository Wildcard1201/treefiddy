const userNumberButtons = document.querySelectorAll('.btn-create-number')
let userNumber;
function userNumberClick() {
    userNumber = this.value
    console.log(`Number of users: ${userNumber}`)
}
userNumberButtons.forEach(e => {
    e.addEventListener('click', userNumberClick)

})