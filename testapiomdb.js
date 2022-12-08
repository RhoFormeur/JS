const app = document.getElementById(`app`)
app.style.display = `flex`

const requestURL = `http://www.omdbapi.com/?apikey=794ce864`

const request = new XMLHttpRequest()

const requestTitre = `&t=` + prompt(`Titre du film`)

const fullURL = requestURL + requestTitre

request.open(`GET`, fullURL)

request.responseType = `json`
request.send()

request.onload = function () {
    const film = request.response
    console.log(film)
    console.log(film[`Title`])
    console.log(film[`Poster`])
    card(film)
}

function card(jsonObj) {
    const imgDiv = document.createElement(`div`)
    const infoDiv = document.createElement(`div`)
    const img = document.createElement(`img`)
    const h3 = document.createElement(`h3`)
    const p1 = document.createElement(`p`)
    const p2 = document.createElement(`p`)
    const p3 = document.createElement(`p`)
    const p4 = document.createElement(`p`)
    const p5 = document.createElement(`p`)
    const p6 = document.createElement(`p`)
    const p7 = document.createElement(`p`)

    img.src = jsonObj[`Poster`]
    h3.innerText = `Titre : ` + jsonObj[`Title`]
    p1.innerText = `Année : ` + jsonObj[`Year`]
    p2.innerText = `Durée : ` + jsonObj[`Runtime`]
    p3.innerText = `Genre : ` + jsonObj[`Genre`]
    p4.innerText = `Acteurs : ` + jsonObj[`Actors`]
    p5.innerText = `Réalisateur : ` + jsonObj[`Director`]
    p6.innerText = `Résumé : ` + jsonObj[`Plot`]
    p7.innerText = `Note : ` + jsonObj[`Ratings`][0][`Value`] +` => `+jsonObj[`Ratings`][0][`Source`]

    imgDiv.appendChild(img)
    infoDiv.appendChild(h3)
    infoDiv.appendChild(p1)
    infoDiv.appendChild(p2)
    infoDiv.appendChild(p3)
    infoDiv.appendChild(p4)
    infoDiv.appendChild(p5)
    infoDiv.appendChild(p6)
    infoDiv.appendChild(p7)
    app.appendChild(imgDiv)
    app.appendChild(infoDiv)
}