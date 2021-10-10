const typeWritter = document.getElementById('typeWritter');
const phrases = ["Hello, my name is John Jarold Paguirigan...",
"Code Name: Cypherzilla...", 
"I have passion for coding, crypto, and science!"];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

const loop = () => {
    isEnd = false
    typeWritter.innerHTML = currentPhrase.join('')

    if (i < phrases.length) {
        if (!isDeleting && j <= j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j])
            j++
        }
    }   

        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j])
            j--
        }

        if (j == phrases[i].length) {
           isEnd = true
           isDeleting = true
        }

        if (isDeleting && j === 0) {
            currentPhrase = []
            isDeleting = false
            i++

            if (i == phrases.length) {
                i = 0
            }
        }

        // const speedUp = Math.random() * (80 -50) + 50
        // const normalSpeed = Math.random() * (300 -200) + 200
        // const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed

    setTimeout(loop, 75);

}


loop();