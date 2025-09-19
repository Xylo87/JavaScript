
/**
 * Permet de savoir si l'utilisateur peut conduire
 * @param {number} age 
 * @param {string} country Code pays sur 2 caractères
 * @returns {boolean} Optionnel avec une fonction qui démarre par "can"
 */
function canDrive(age, country) {
    if (age >= 18) {
        return true
    } else if (country === 'US' && age >=16) {
        return true
    }
    return false
}

canDrive()



/**
 * @returns {{id: number, title: string}}
 */
function fetchPost() {
    
}

const object = fetchPost()
// object.



// @returns {string[]}
//  @returns {Array<string>}
/**
 * 
 * @returns {{id: number, title: string}[]}
 */
function returnArray() {
    return ['Kiouze', 'Kazel', 'Isimorn']
}

const array = returnArray()
// array[0].



/**
 * @type {string[]}
 */
const tab = []