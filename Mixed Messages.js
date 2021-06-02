/* eslint-disable strict */
const mixedMessages = {
    joke1: [],
    joke2: [],
    joke3: [],
}
// Makes Random Number 
const generateRandNum = num => {
    return Math.floor(Math.random() * num);
};
// this will make the messages
const makeJokes = () => {
    let phrases = []

    for (let arr in mixedMessages) {
        let jokes = random(mixedMessages[arr].length)
        switch (arr) {
            case 'joke1': phrases.push(`   ${mixedMessages[arr][jokes]}`)
                break;
            case 'joke2': phrases.push(`   ${mixedMessages[arr][jokes]}`)
                break;
            case 'joke3': phrases.push(`   ${mixedMessages[arr][jokes]}`)
            break;
            default: 'error'
            break;
        }
    }
    return phrases.join('\n')
}


console.log(makeJokes());

































