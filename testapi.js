const app = document.getElementById(`app`)

// // OMDb Api URL : http://www.omdbapi.com/?apikey=794ce864
// const requestURL = ``

// const request = new XMLHttpRequest()

// const requestTitre = `&t=` + prompt(`Titre du film`)

// const fullURL = requestURL + requestTitre

// request.open(`GET`, fullURL)

// request.responseType = `json`
// request.send()

// request.onload = function () {
//     const film = request.response
//     console.log(film)
//     console.log(film[`Title`])
//     console.log(film[`Poster`])
//     card(film)
// }
// console.log(request)

// function card(jsonObj) {
//     const imgDiv = document.createElement(`div`)
//     const infoDiv = document.createElement(`div`)
//     const img = document.createElement(`img`)
//     const h3 = document.createElement(`h3`)
//     const p1 = document.createElement(`p`)
//     const p2 = document.createElement(`p`)
//     const p3 = document.createElement(`p`)
//     const p4 = document.createElement(`p`)
//     const p5 = document.createElement(`p`)
//     const p6 = document.createElement(`p`)
//     const p7 = document.createElement(`p`)

//     img.src = jsonObj[`Poster`]
//     h3.innerText = `Titre : ` + jsonObj[`Title`]
//     p1.innerText = `Année : ` + jsonObj[`Year`]
//     p2.innerText = `Durée : ` + jsonObj[`Runtime`]
//     p3.innerText = `Genre : ` + jsonObj[`Genre`]
//     p4.innerText = `Acteurs : ` + jsonObj[`Actors`]
//     p5.innerText = `Réalisateur : ` + jsonObj[`Director`]
//     p6.innerText = `Résumé : ` + jsonObj[`Plot`]
//     p7.innerText = `Note : ` + jsonObj[`Ratings`][0][`Value`] + ` => ` + jsonObj[`Ratings`][0][`Source`]

//     imgDiv.appendChild(img)
//     infoDiv.appendChild(h3)
//     infoDiv.appendChild(p1)
//     infoDiv.appendChild(p2)
//     infoDiv.appendChild(p3)
//     infoDiv.appendChild(p4)
//     infoDiv.appendChild(p5)
//     infoDiv.appendChild(p6)
//     infoDiv.appendChild(p7)
//     app.appendChild(imgDiv)
//     app.appendChild(infoDiv)
// }





// TMDb API weekly trending URL : https://api.themoviedb.org/3/trending/all/week?api_key=de915367cc4815667c4f4866d61485af&language=fr-FR

const fullURL = `https://api.themoviedb.org/3/trending/all/week?api_key=de915367cc4815667c4f4866d61485af&language=fr-FR`
app.style.display = `flex`
app.style.flexWrap = `wrap`
fetch(fullURL)
    .then(res => res.json())
    .then(res => {
        console.log(`fetch`, res);
        card(res)
    })
    .catch(err => console.log(err))

function card(jsonObj) {
    jsonObj[`results`].map((i) => {
        const div = document.createElement(`div`)
        const a = document.createElement(`a`)
        const img = document.createElement(`img`)
        const posterPath = i.poster_path
        img.setAttribute(`id`, i.id)
        img.setAttribute(`type`, i.media_type)
        img.src = `https://image.tmdb.org/t/p/original` + posterPath
        img.style.width = `200px`
        img.addEventListener(`click`, () => buildArticle(i.media_type, i.id))
        div.style.margin = `5px`
        a.appendChild(img)
        div.appendChild(a)
        app.appendChild(div)

    })
}

function fetchUrl(url) {
    fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(`fetch`, res);
            affichage(res)
        })
        .catch(err => console.log(err))
}

function buildArticle(type, id) {
    const url = ``
    // const id = e.target.id
    // console.log(`event`,e.target)
    // const type = e.target.type
    console.log(`id`, id)
    console.log(`type`, type);
    switch (type) {
        case type == `tv`:
            url = `https://api.themoviedb.org/3/tv/` + id + `?api_key=de915367cc4815667c4f4866d61485af&language=fr-FR`
            console.log(`prefetch`, url);
            fetchUrl(url)
            break
        case type == `movie`:
            url = `https://api.themoviedb.org/3/movie/` + id + `?api_key=de915367cc4815667c4f4866d61485af&language=fr-FR`
            console.log(`prefetch`, url);
            fetchUrl(url)
            break
    }

}

function affichage(jsonObj) {
    app.innerHTML = ``
    const divImg = document.createElement(`div`)
    const divInfo = document.createElement(`div`)
    const img = document.createElement(`img`)
    img.src = `https://image.tmdb.org/t/p/original` + jsonObj[`poster_path`]
    img.style.width = `50vw`
    const titre = document.createElement(`p`)
    const genre = document.createElement(`p`)
    const resume = document.createElement(`p`)
    const rate = document.createElement(`p`)

    titre.innerText = `Titre : ` + jsonObj[`name`]
    // genre.innerText = jsonObj[`genres`][0][`name`] + `, ` + jsonObj[`genres`][1][`name`] + `, ` + jsonObj[`genres`][2][`name`]
    resume.innerText = `Résumé : ` + jsonObj[`overview`]
    rate.innerText = `Note : ` + jsonObj[`vote_average`]

    divImg.appendChild(img)
    divInfo.appendChild(titre)
    divInfo.appendChild(genre)
    divInfo.appendChild(resume)
    divInfo.appendChild(rate)
    app.appendChild(divImg)
    app.appendChild(divInfo)
}