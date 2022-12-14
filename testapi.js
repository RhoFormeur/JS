const app = document.getElementById(`app`)

// TMDb API weekly trending URL : https://api.themoviedb.org/3/trending/all/week?api_key=de915367cc4815667c4f4866d61485af&language=fr-FR

const fullURL = `https://api.themoviedb.org/3/trending/all/week?api_key=de915367cc4815667c4f4866d61485af&language=fr-FR`

const cardContainer = document.createElement(`ul`)
cardContainer.setAttribute(`id`, `cardList`)
cardContainer.style.display = `flex`
cardContainer.style.flexWrap = `wrap`
cardContainer.style.listStyle = `none`

const divSearch = document.createElement(`div`)
const inputSearch = document.createElement(`input`)
inputSearch.setAttribute(`type`, `text`)
inputSearch.setAttribute(`onkeyup`, `filtrer()`)
divSearch.style.marginBottom = `5px`
divSearch.appendChild(inputSearch)
app.appendChild(divSearch)
app.appendChild(cardContainer)

fetchTable(fullURL)

// Fonction recherche
function filtrer() {
    const filter = inputSearch.value.toUpperCase()
    const ul = document.getElementById(`cardList`)
    const li = ul.getElementsByTagName(`li`)
    for (i = 0; i < li.length; i++) {
        const h3 = li[i].getElementsByTagName(`h3`)[0]
        const txtvalue = h3.textContent || h3.innerText
        if (txtvalue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ``
        } else {
            li[i].style.display = `none`
        }
    }
}

// Requete films et series trending
function fetchTable(url) {
    fetch(url)
        .then(res => res.json())
        .then(res => {
            card(res[`results`])
        })
        .catch(err => console.log(err))
}

// Requete details article
function fetchArticle(url) {
    fetch(url)
        .then(res => res.json())
        .then(res => {
            affichage(res)
        })
        .catch(err => console.log(err))
}

//Fermer la page article
function closeArticle() {
    cardContainer.innerHTML = ``
    fetchTable(fullURL)
}

// Creatrion de l'URL en fonction de l'article
function buildUrl(type, id) {
    let url = ``
    if (type === `tv`) {
        url = `https://api.themoviedb.org/3/tv/` + id + `?api_key=de915367cc4815667c4f4866d61485af&language=fr-FR`
        fetchArticle(url)
    } else if (type === `movie`) {
        url = `https://api.themoviedb.org/3/movie/` + id + `?api_key=de915367cc4815667c4f4866d61485af&language=fr-FR`
        fetchArticle(url)
    }
}

// Création des cards en mappant le tableau
function card(jsonObj) {
    jsonObj.map((i) => {
        const div = document.createElement(`li`)
        const h3 = document.createElement(`h3`)
        const img = document.createElement(`img`)
        const posterPath = i.poster_path
        img.src = `https://image.tmdb.org/t/p/original` + posterPath
        img.style.width = `300px`
        img.addEventListener(`click`, () => buildUrl(i.media_type, i.id))

        // Different selon le type d'article pour recuperer le nom
        if (i.media_type === `tv`) {
            h3.innerText = i[`name`]
        } else if (i.media_type === `movie`) {
            h3.innerText = i[`title`]
        }

        div.style.margin = `5px`
        div.appendChild(img)
        div.appendChild(h3)
        cardContainer.appendChild(div)
    })
}

// Reset + Affichage article
function affichage(jsonObj,) {
    cardContainer.innerHTML = ``
    const divImg = document.createElement(`div`)
    const divInfo = document.createElement(`div`)
    const img = document.createElement(`img`)
    const btn = document.createElement(`button`)
    btn.setAttribute(`onclick`, `closeArticle()`)
    btn.innerText = `X`
    btn.style.width = `50px`
    btn.style.height = `50px`
    img.src = `https://image.tmdb.org/t/p/original` + jsonObj[`poster_path`]
    img.style.width = `50vw`
    const titre = document.createElement(`p`)
    const divGenre = document.createElement(`div`)
    const resume = document.createElement(`p`)
    const rate = document.createElement(`p`)
    const nbGenre = jsonObj.genres.length
    const pGenre = document.createElement(`p`)
    pGenre.innerText = `Genres :`
    pGenre.style.marginRight = `5px`
    divGenre.appendChild(pGenre)
    divGenre.style.display = `flex`

    // Different selon le type d'article pour recuperer le nom
    if (jsonObj[`name`] === undefined) {
        titre.innerText = `Titre : ` + jsonObj[`title`]
    } else {
        titre.innerText = `Titre : ` + jsonObj[`name`]
    }

    // Boucle pour afficher les genres peut importe le nombre
    for (i = 0; i < nbGenre; i++) {
        const p = document.createElement(`p`)
        p.innerText = jsonObj[`genres`][i][`name`]
        p.style.marginRight = `5px`
        divGenre.appendChild(p)
    }

    resume.innerText = `Résumé : ` + jsonObj[`overview`]
    rate.innerText = `Note : ` + jsonObj[`vote_average`]

    divImg.appendChild(img)
    divImg.appendChild(btn)
    divInfo.appendChild(titre)
    divInfo.appendChild(divGenre)
    divInfo.appendChild(resume)
    divInfo.appendChild(rate)
    cardContainer.appendChild(divImg)
    cardContainer.appendChild(divInfo)
}