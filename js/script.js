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


// ===================
//    Meme App Second
// ===================

function reset(){
    clearAll2()
}

function clearAll2(){
   const memesContainer = document.querySelector('.meme-content2');
   const jokes2Container = document.querySelector('.joke-content2');
   const quotes2Container = document.querySelector('.quote-content2');
   const riddle2Container = document.querySelector('.riddle-content2');
   
   memesContainer.innerHTML = '';
   jokes2Container.innerHTML = '';
   quotes2Container.innerHTML = '';
   quotes2Container.innerHTML = '';
   riddle2Container.innerHTML = '';
}

function showMeme2(){
   const rnDataContent =  randomdata2('memes2');
   const memesContainer = document.querySelector('.meme-content2');
   const memesCntContainer = document.createElement('img');
        memesCntContainer.setAttribute('src', rnDataContent );

    clearAll2();

    memesContainer.appendChild(memesCntContainer);      
}

function showJoke2(){
    const rnDataContent =  randomdata2('jokes2');
    const jokes2Container = document.querySelector('.joke-content2');
    const newJokeP = document.createElement('p');
    newJokeP.textContent = rnDataContent;

    clearAll2()

    jokes2Container.appendChild(newJokeP);
}

function showQuote2(){
    const rnDataContent =  randomdata2('quotes2');
    const quotes2Container = document.querySelector('.quote-content2');
    const {quote, author} = rnDataContent;
    const newQuote2 = document.createElement('p');
    newQuote2.textContent = quote;

    const quoteAuthor = document.createElement('p');
    quoteAuthor.textContent = "- " + author;

    clearAll2();

    quotes2Container.appendChild(newQuote2);
    quotes2Container.appendChild(quoteAuthor);
}

function showRiddle2(){
    const rnDataContent =  randomdata2('riddles2');
    const riddle2Container = document.querySelector('.riddle-content2');
    const { question, answer} = rnDataContent;
    
    const riddleQuestion = document.createElement('p');
    riddleQuestion.textContent = question;

    const riddleAnswer = document.createElement('p');
    riddleAnswer.textContent = "This is a Answer: " + answer;
    riddleAnswer.setAttribute('id', 'riddle-ans');
    riddleAnswer.hidden = true;


    clearAll2();

    riddle2Container.appendChild(riddleQuestion);
    riddle2Container.appendChild(riddleAnswer);
}

function revealAnswers2(){
    const riddle2Container = document.querySelector('.riddle-content2');
    const riddle2Para = riddle2Container.querySelector('p');
    const riddle2Answer = document.querySelector('#riddle-ans');
    

    if(riddle2Para && riddle2Answer.hidden){
        riddle2Answer.hidden = false;
    }else if(riddle2Answer){
        alert('Already show the Answer.');
    }else{
        alert('There is no answer reval to.');
    }
}


function randomdata2(type){
    return data2[type][rndata(data2[type].length)];
}

const memes2 = [
    'https://img.magnific.com/free-vector/simple-vibing-cat-square-meme_742173-4493.jpg?ga=GA1.1.300798732.1779195873&semt=ais_hybrid&w=740&q=80',
    'https://img.magnific.com/free-vector/funny-anytime-mum-calls-meme_23-2149093840.jpg?ga=GA1.1.300798732.1779195873&semt=ais_hybrid&w=740&q=80',
    'https://img.magnific.com/free-vector/funny-please-no-animal-meme_23-2149152570.jpg?ga=GA1.1.300798732.1779195873&semt=ais_hybrid&w=740&q=80',
    'https://img.magnific.com/free-vector/national-fun-work-day-square-meme_742173-15702.jpg?ga=GA1.1.300798732.1779195873&semt=ais_hybrid&w=740&q=80',
    'https://img.magnific.com/premium-vector/creative-custom-typography-t-shirt-design_1282524-1064.jpg?ga=GA1.1.300798732.1779195873&semt=ais_hybrid&w=740&q=80',
    'https://img.magnific.com/free-vector/how-i-feel-meme_23-2149003983.jpg?ga=GA1.1.300798732.1779195873&semt=ais_hybrid&w=740&q=80',
    'https://img.magnific.com/premium-vector/cat-drinking-coffee-funny-tshirt-design-vector_621660-7004.jpg?ga=GA1.1.300798732.1779195873&semt=ais_hybrid&w=740&q=80'
]

const jokes2 = [
    `Why do not skeletons fight each other / * They do not have the guts.*`,
    `I told my computer I needed a break. / It said, "No problem, I'll freeze.`,
    `Why did the math book look sad? / * It had too many problems. *`,
    `I asked the librarian if the library had books on paranoia. / * She whispered, "They're right behind you."`,
    `Why did the scarecrow win an award? / *Because he was outstanding in his field.*`,
    `Parallel lines have so much in common. / * It's a shame they'll never meet. *`,
    `I only know 25 letters of the alphabet. / * I don't know Y. *`,
    `Why don't scientists trust atoms? / * Because they make up everything. *`,
    `My wallet is like an onion. / * Opening it makes me cry. *`,
    `I told my Wi-Fi we needed to talk. / * Now we're not connected anymore. 😄 *`
]

const quotes2 = [
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


const riddles2 = [
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


function rndata(len){
    return Math.floor(Math.random() * len);
}

const data2 = {
    memes2,
    jokes2,
    quotes2,
    riddles2
}
