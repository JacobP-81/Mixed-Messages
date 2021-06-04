/* eslint-disable strict */
const mixedMessages = {
    joke1: ['she hides the sun','when she got on the scale it said, "I need your weight not your phone number."',' that when she went to the beach a whale swam up and sang, "We are family, even though you're fatter than me."','when God said, "Let there be light," he asked your mother to move out of the way.' ],
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
            case 'joke1': phrases.push(`Yo mama is so fat, ${mixedMessages[arr][jokes]}`)
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

































