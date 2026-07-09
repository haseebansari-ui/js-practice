"use strict"

function clearAll(){
const memeContainer = document.querySelector('.meme-content');
const jokeContainer = document.querySelector('.joke-content');
const quoteContainer = document.querySelector('.quote-content');
const riddleContainer = document.querySelector('.riddle-content');

memeContainer.innerHTML = '';
jokeContainer.innerHTML = '';
quoteContainer.innerHTML = '';
riddleContainer.innerHTML = '';
}

function showMeme(){

    const randomMemeUrl = getRandomData('memes');
    const container = document.querySelector('.meme-content');
    const newElement = document.createElement('img');
    newElement.setAttribute('src', randomMemeUrl)

    clearAll()
    
    container.appendChild(newElement);
}


function showJoke(){
    const randomJokeText = getRandomData('jokes');
    const newP = document.createElement('p');
    newP.textContent = randomJokeText;

    const newCJoke = document.querySelector('.joke-content');
        clearAll()
    newCJoke.appendChild(newP);

    
    
}

function showQuote(){
    const randomQuote = getRandomData('quotes');
    const newQuote = document.createElement('p');
    const author = document.createElement('p');
    newQuote.textContent = randomQuote.quote;
    author.textContent = '- ' + randomQuote.author;


    const newQuoteContainer = document.querySelector('.quote-content');
    clearAll()
    newQuoteContainer.appendChild(newQuote);
    newQuoteContainer.appendChild(author)   
}

function showRiddle(){
    const randomRiddle = getRandomData('riddles');
    const {question, answer} = randomRiddle;

    const questionElem = document.createElement('p');
    questionElem.textContent = question;

    const answerElem = document.createElement('p');    
    answerElem.textContent = answer;    
    answerElem.setAttribute('id', 'riddle-answer');
    answerElem.hidden = true;

    
    const newRidContainer = document.querySelector('.riddle-content');
    clearAll();
    newRidContainer.appendChild(questionElem);
    newRidContainer.appendChild(answerElem);
}

function revealAnswers(){

    const riddleContainer = document.querySelector('.riddle-content');
    const riddle = riddleContainer.querySelector('p');
    const answer = document.querySelector('#riddle-answer');

    console.log(answer);

    if (riddle && answer.hidden){
        answer.hidden = false;
    }else if(riddle){
        alert('Already reveal the Answer');
    }else{
        alert('There is no Answer reval to');
    }
}

function getRandomData(type){
    return data[type][rn(data[type].length)];
}



// =====================
//    Button Content
// =====================

const memes = [
    'https://www.magnific.com/free-photos-vectors/memes',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdlbqimzR0rQ7j8zJ8fgUlnDv1BZM8XdI41TC1wFgb9FssYQ1rjrwp5T3a&s=10',
    'https://t3.ftcdn.net/jpg/13/48/09/42/360_F_1348094272_OrravX8WpawzEMXrxkhlP9PsitnpGovQ.jpg',
    'https://cdn-useast1.kapwing.com/static/templates/monkey-thinking-meme-template-27--kClqt8PzKNph-full.jpg',
    'https://encrypted-tbn0.gstatic.com/images?=tbn:ANd9GcRPEIevZxmt1Fb25VF8N9eIQcJpDALJ-fC1IZAohVa5HQzPalEuLAHed2Kc&s=10'
]

const jokes = [
    'Why did the marketer break up with the spreadsheet? It kept bringing up old data.',
    'I asked AI to run my ad campaign. Now it asks me for performance reviews.',
    'Performance marketing is like going to the gym. Everyone wants six-pack ROAS, but nobody wants to optimize daily. 😄'
]

const quotes = [
    {
        quote: 'The best marketing does not feel like marketing',
        author: 'Tom Fishburne',
    },
    {
        quote: 'Powered by AI. Driven by Results.',
        author: 'Peter Drucker',
    },
    {
        quote: 'Growth is never by mere chance; it is the result of forces working together.',
        author: 'James Cash Penney',
    },
]

const riddles = [
    {
        question: 'What is performance marketing?',
        answer: 'Performance marketing is a results-driven digital marketing strategy where advertisers pay only for measurable actions such as clicks, leads, app installs, or conversions, ensuring maximum ROI.',
    },
    {
        question: 'How does Havmor Media help grow my business?',
        answer: 'We leverage AI-powered optimization, real-time analytics, audience targeting, and multi-channel campaigns to increase traffic, generate quality leads, and maximize your return on ad spend (ROAS).',
    },
    {
        question: 'Which industries do you work with?',
        answer: 'We partner with businesses across FinTech, E-commerce, Gaming, Travel, EdTech, Healthcare, Insurance, Mobile Apps, and other industries looking to scale through performance marketing.    ',
    },
]



function rn(len){
    return Math.floor(Math.random() * len);
}

const data = {
    memes,
    jokes,
    quotes,
    riddles,
};