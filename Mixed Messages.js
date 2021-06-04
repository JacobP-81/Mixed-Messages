<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Mixed messages</title>
</head>
<body>
	<script>
	/* eslint-disable strict */
	const mixedMessages = {
		joke1: ['she hides the sun','when she got on the scale it said, "I need your weight not your phone number."',' that when she went to the beach a whale swam up and sang, "We are family, even though you're fatter than me."','when God said, "Let there be light," he asked your mother to move out of the way.' ],
		joke2: ['she bought tickets to Xbox Live.', 'she had a staring contest with a Ford Focus.', 'she came over to my house and shouted in my mailbox to leave me voicemail.', 'when the judge said, Order! Order!" she said, "Fries and coke please."'],
		joke3: ['she made my happy meal cry', ' she could not even get a date on the calendar.', 'people convinced her that it was Halloween every day so she would wear a mask.', 'when she looked into the mirror, the mirror looked away.'],
	}
	// Makes Random Number 
	const generateRandNum = num => {
		return Math.floor(Math.random() * num);
	};
	// this will make the messages
	const makeJokes = () => {
		let phrases = []

		for (let arr in mixedMessages) {
            let rando = generateRandNum(mixedMessages[arr].length)
			let jokes = prompt("Fill in your joke here");
			mixedMessages[arr].push(jokes);

			switch (arr) {
				case 'joke1': phrases.push(`Yo mama is so fat, ${mixedMessages[arr][rando]}`)
					break;
				case 'joke2': phrases.push(`Yo mama is so stupid, ${mixedMessages[arr][rando]}`)
					break;
				case 'joke3': phrases.push(`Yo mama is so ugly, ${mixedMessages[arr][rando]}`)
				break;
				default: 'error'
				break;
			}
		}
		return phrases.join('\n')
	}


console.log(makeJokes());


































