const body = document.querySelector("body")
body.style.margin = 0
body.style.padding = 0

const app = document.getElementById("app")

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

app.style.width = "100vw"
app.style.display = "flex"
app.style.flexWrap = "wrap"
app.style.justifyContent = "center"

function addCard(table){
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
        app.appendChild(div)
    })
    return
}
addCard(arr)

arr.sort((a, b) => a.name.localeCompare(b.name))

addCard(arr)

arr.sort((a,b)=> a.nbHabitant-b.nbHabitant)

addCard(arr)

// arr.map((i) => {
//     const div = document.createElement("div")
//     const p = document.createElement("p")
//     p.innerText = i.name + " = " + i.nbHabitant
//     p.style.padding = "0 20px"
//     p.style.margin = "10px"
//     div.style.border = "solid 2px black"
//     div.style.borderRadius = "40px"
//     div.style.margin = "5px"
//     div.style.display = "flex"
//     div.appendChild(p)
//     app.appendChild(div)
// })

// arr.sort((a, b) => a.name.localeCompare(b.name))

// arr.map((i) => {
//     const div = document.createElement("div")
//     const p = document.createElement("p")
//     p.innerText = i.name + " = " + i.nbHabitant
//     p.style.padding = "0 20px"
//     p.style.margin = "10px"
//     div.style.border = "solid 2px black"
//     div.style.borderRadius = "40px"
//     div.style.margin = "5px"
//     div.style.display = "flex"
//     div.appendChild(p)
//     app.appendChild(div)
// })

// arr.sort((a,b)=> a.nbHabitant-b.nbHabitant)

// arr.map((i) => {
//     const div = document.createElement("div")
//     const p = document.createElement("p")
//     p.innerText = i.name + " = " + i.nbHabitant
//     p.style.padding = "0 20px"
//     p.style.margin = "10px"
//     div.style.border = "solid 2px black"
//     div.style.borderRadius = "40px"
//     div.style.margin = "5px"
//     div.style.display = "flex"
//     div.appendChild(p)
//     app.appendChild(div)
// })