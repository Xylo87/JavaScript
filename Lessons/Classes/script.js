class Game {

    // > Private property
    #secret = 'I love you'

    constructor(title, console) {
        this.title = title
        this.console = console
    }

    get titleAndSupport() {
        return `${this.title} ${this.console}`
    }

    set metaScores(notes) {
        this.notes = notes
    }

    // avgMetaScore() {
    //     let allNotes = this.notes
    //     let setAdd = 0
        
    //     allNotes.forEach(note => {
    //         setAdd += note
    //     });

    //     let avgMetaScore = setAdd / allNotes.length
    //     return avgMetaScore
    // }

    // greenScore() {
    //     return this.avgMetaScore() >= 10
    // }

    static catchPhrase = 'Gaming is fun !'

    static catchPhrase2() {
        console.log('Gaming is REALLY fun !')
    }
}

class SuperGame extends Game {
    
    constructor(title, console, screen) {
        super(title, console)
        this.screen = screen
    }

    get newTitle() {
        return 'Super ' + super.titleAndSupport
    }
}

const revengeOfShinobi = new SuperGame('Revenge of Shinobi', 'Megadrive', 'Mobile')
const crashBandicoot = new Game('Crash Bandicoot', 'Playstation')

console.log(revengeOfShinobi, crashBandicoot)

// revengeOfShinobi.setMetaScores([14, 12])
// crashBandicoot.setMetaScores([17, 18])

// console.log(crashBandicoot.avgMetaScore())
// console.log(crashBandicoot.greenScore())

console.log(crashBandicoot.titleAndSupport)

crashBandicoot.metaScores = [19, 18, 17]

console.log(Game.catchPhrase)
Game.catchPhrase2()

console.log(revengeOfShinobi.newTitle)

// console.log(crashBandicoot.#secret)

