const form = document.querySelector(`form`)
form.style.display = `flex`
form.style.flexDirection = `column`
const inputFN = document.getElementById(`firstname`)
const inputLN = document.getElementById(`lastname`)
const inputDOB = document.getElementById(`dateofbirth`)
const inputMailA = document.getElementById(`mail`)
const inputMailB = document.getElementById(`confirmmail`)

const regexName = /^([A-Z][a-z]+)\-([A-Z][a-z]+)|([A-Z][a-z]+)$/
const regexDate = /^[0-3][0-9]\-[01][0-9]\-[12][09][0-9][0-9]$/
const regexMail = /^.*\@[a-z]*\.[a-z]{2,3}$/


let checkNameA = 0
let checkNameB = 0
let checkDate = 0
let checkMailA = 0
let checkMailB = 0

function regexFN(input, regex) {
    if (!input.value.match(regex)) {
        input.style.backgroundColor = `red`
    } else if (input.value.match(regex)) {
        input.style.backgroundColor = `green`
        checkNameA = 1
    }
}

function regexLN(input, regex) {
    if (!input.value.match(regex)) {
        input.style.backgroundColor = `red`
    } else if (input.value.match(regex)) {
        input.style.backgroundColor = `green`
        checkNameB = 1
    }
}

function regexDOB(input, regex) {
    if (!input.value.match(regex)) {
        input.style.backgroundColor = `red`
    } else if (input.value.match(regex)) {
        input.style.backgroundColor = `green`
        checkDate = 1
    }
}

function regexMailA(input, regex) {
    if (!input.value.match(regex)) {
        input.style.backgroundColor = `red`
    } else if (input.value.match(regex)) {
        input.style.backgroundColor = `green`
        checkMailA = 1
    }
}

function checkMail(input) {
    if (checkMailA == 1 && input.value == inputMailA.value) {
        input.style.backgroundColor = `green`
        checkMailB = 1
    } else if (input.value !== inputMailA.value) {
        input.style.backgroundColor = `red`
    }
}

function checkForm(event) {
    event.preventDefault()
    const newsletter = document.getElementById(`newsletter`).checked
    regexFN(inputFN, regexName)
    regexLN(inputLN, regexName)
    regexDOB(inputDOB, regexDate)
    regexMailA(inputMailA, regexMail)
    checkMail(inputMailB)
    console.log(checkNameA, checkNameB, checkDate, checkMailA, checkMailB, newsletter);
    if (checkNameA == 0 && checkNameB == 0 && checkDate == 0 && checkMailA == 0 && newsletter == false) {
        alert(`Veuillez remplir le formulaire`)
    } else if (checkNameA == 0 || checkNameB == 0) {
        alert(`Veuillez renseigner un Nom ou un Prénom respectant la chartes`)
    } else if (checkDate == 0) {
        alert(`Veuillez renseigner une Date de Naissance respectant la chartes`)
    } else if (checkMailA == 0 || checkMailB == 0) {
        alert(`Veuillez renseigner une Adresse Mail respectant la chartes`)
    } else if (newsletter == false) {
        alert(`Vous devez vous inscrire à la Newsletter`)
    } else if (checkNameA == 1 && checkNameB == 1 && checkDate == 1 && checkMailA == 1 && checkMailB == 1 && newsletter == true) {
        alert(`Confirmer l'envois du formulaire`)
        form.submit()
    }
}