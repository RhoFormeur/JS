const body = document.querySelector("body")
body.style.margin = 0
body.style.padding = 0

const app = document.getElementById("app")
app.style.width = "100vw"

// Array
const arr = [
    { id: 0, name: "Paris", nbHabitant: 10858852 },
    { id: 1, name: "Berlin", nbHabitant: 3748148 },
    { id: 2, name: "Londres", nbHabitant: 8908081 },
    { id: 3, name: "Madrid", nbHabitant: 3305408 },
    { id: 4, name: "Rome", nbHabitant: 2844395 },
    { id: 5, name: "Bruxelles", nbHabitant: 188737 },
    { id: 6, name: "Amsterdam", nbHabitant: 851573 },
    { id: 7, name: "Vienne", nbHabitant: 1911191 },
    { id: 8, name: "Luxembourg", nbHabitant: 128494 },
    { id: 9, name: "Dublin", nbHabitant: 554554 },
]

// Fonction ajout card
function addCard(table) {
    const container = document.createElement("div")
    container.style.marginBottom = "20px"
    container.style.display = "flex"
    container.style.flexWrap = "wrap"
    container.style.justifyContent = "center"

    // Mapper le tableau
    table.map((i) => {
        const div = document.createElement("div")
        const p = document.createElement("p")
        p.innerText = i.name + " = " + i.nbHabitant
        p.style.padding = "0 20px"
        p.style.margin = "10px"
        div.style.border = "solid 2px black"
        div.style.borderRadius = "40px"
        div.style.margin = "5px"
        div.style.display = "flex"
        div.appendChild(p)
        container.appendChild(div)
    })

    app.appendChild(container)
}

// Ajout d'une card
addCard(arr)

// Trier le tableau
arr.sort((a, b) => a.name.localeCompare(b.name))

// ajout d'une card
addCard(arr)

// Trier le tableau
arr.sort((a, b) => a.nbHabitant - b.nbHabitant)

// ajout d'une card
addCard(arr)