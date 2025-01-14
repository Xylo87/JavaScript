// fonction fetch() de contact de l'API
async function callAPI(url) {
    console.log("--callAPI - start --")
    console.log("url = ", url)

    // appel de l'API et réception de la réponse
    const response = await fetch(url)
    console.log("response = ", response)

    // récupération des données JSON reçues de l'API
    const data = await response.json()
    console.log("data = ", data)

    console.log("-- callAPI - end --")

    // renvoi des données
    return data
}





// ACTIONS TECHNIQUES

// constante globale : l'URL du endpoint de demande de nouveau deck
const API_ENDPOINT_NEW_DECK = "https://deckofcardsapi.com/api/deck/new/"

// fonction de demande de nouveau deck
async function getNewDeck() {
    console.log(">> getNewDeck")

    return await callAPI(API_ENDPOINT_NEW_DECK)
}



// variable globale : l'id du deck utilisé, dans lequel on pioche
let idDeck = null

// fonctions (flêchées) qui renvoient des URL dynamiques de demande de mélange du deck (et de pioche)
const getApiEndPointShuffleDeck = () => `https://deckofcardsapi.com/api/deck/${idDeck}/shuffle/`
// https://deckofcardsapi.com/api/deck/${idDeck}/shuffle/?remaining=true"

// fonction de demande de mélange du deck
async function shuffleDeck() {
    console.log(">> shuffleDeck")

    return await callAPI(getApiEndPointShuffleDeck())
}



// fonctions (flêchées) qui renvoient des URL dynamiques de demande de pioche
const getApiEndpointDrawCard = () => `https://deckofcardsapi.com/api/deck/${idDeck}/draw/?count=1`

// fonction de demande de pioche dans le deck
async function drawCard() {
    return await callAPI(getApiEndpointDrawCard())
}





// ACTIONS FONCTIONNELLES

// Supprime les cartes de l'ancien deck du DOM
const cleanDomCardsFromPreviousDeck = () => document.querySelectorAll(".card").forEach((child) => child.remove())

// fonction de réinitialisation (demande de nouveau deck + demande de mélange du nouveau deck)
async function actionReset() {
    cleanDomCardsFromPreviousDeck()

    // récupération d'un nouveau deck
    const newDeckResponse = await getNewDeck()

    // récupération de l'id du nouveau deck dans les données reçues et mise à jour de la variable globale
    idDeck = newDeckResponse.deck_id;

    // mélange du deck
    await shuffleDeck()
}



// éléments HTML utiles pour les évènements et pour la manipulation du DOM
const cardsContainer = document.getElementById("cards-container")

// ajoute une carte dans le DOM (dans la zone des cartes piochées) d'après l'URL de son image
function addCardToDomByImgUrl(imgUrl) {
    
    // création de l'élément HTML "img", de classe CSS "card" et avec pour attribut HTML "src" l'URL reçu en argument
    const imgCardHtmlElement = document.createElement("img")
    imgCardHtmlElement.classList.add("card")
    imgCardHtmlElement.src = imgUrl

    // ajout de cette carte image dans la zone des cartes piochées (en dernière position, dernier enfant de cardsContainer)
    cardsContainer.append(imgCardHtmlElement)
}

// fonction qui demande de piocher une carte, puis qui fait l'appel pour l'intégrer dans le DOM
async function actionDraw() {
    
    // appel de l'API pour demander au croupier de piocher une carte et de nous la renvoyer
    const drawCardResponse = await drawCard()
    console.log("drawCardResponse = ", drawCardResponse)

    // récupération de l'URL de l'image de cette carte dans les données reçues
    const imgCardUrl = drawCardResponse.cards[0].image

    // ajout de la carte piochée dans la zone des cartes piochées
    addCardToDomByImgUrl(imgCardUrl)
}





// appel d'initialisation au lancement de l'application
actionReset()





// éléments HTML utiles pour les évènements et pour la manipulation du DOM
const actionResetButton = document.getElementById("action-reset")
const actionDrawButton = document.getElementById("action-draw")

// écoutes d'évènements sur les boutons d'action
actionResetButton.addEventListener("click", actionReset)
actionDrawButton.addEventListener("click", actionDraw)


