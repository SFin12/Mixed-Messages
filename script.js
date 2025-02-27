

// npm version 6.14.8

const randomNumber = (range) => { 
    return Math.floor(Math.random()* range); 
};



const data = [
    " The best way to get started is to quit talking and begin doing. -- Walt Disney",
    " The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. -- Winston Churchill",
    " Dont let yesterday take up too much of today. -- Will Rogers",
    " You learn more from failure than from success. Dont let it stop you. Failure builds character. -- Unknown",
    " Its not whether you get knocked down, its whether you get up. -- Inspirational Quote by Vince Lombardi",
    " If you are working on something that you really care about, you dont have to be pushed. The vision pulls you. -- Steve Jobs",
    " People who are crazy enough to think they can change the world, are the ones who do. -- Rob Siltanen",
    " Failure will never overtake me if my determination to succeed is strong enough. -- Og Mandino",
    " Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. Thats the classic entrepreneur. -- Mohnish Pabrai",
    " We may encounter many defeats but we must not be defeated. -- Maya Angelou",
    " Knowing is not enough; we must apply. Wishing is not enough; we must do. -- Johann Wolfgang Von Goethe",
    " Imagine your life is perfect in every respect; what would it look like? -- Brian Tracy",
    " We generate fears while we sit. We overcome them by action. -- Dr. Henry Link",
    " Whether you think you can or think you cant, youre right. -- Quote by Henry Ford",
    " Security is mostly a superstition. Life is either a daring adventure or nothing. -- Life Quote by Helen Keller",
    " The man who has confidence in himself gains the confidence of others. -- Hasidic Proverb",
    " The only limit to our realization of tomorrow will be our doubts of today. -- Motivational Quote by Franklin D. Roosevelt",
    " Creativity is intelligence having fun. -- Albert Einstein",
    " What you lack in talent can be made up with desire, hustle and giving % all the time. -- Don Zimmer",
    " Do what you can with all you have, wherever you are. -- Theodore Roosevelt",
    " Develop an Attitude of Gratitude. Say thank you to everyone you meet for everything they do for you. -- Encouraging Quote by Brian Tracy",
    " You are never too old to set another goal or to dream a new dream. -- C.S. Lewis",
    " To see what is right and not do it is a lack of courage. -- Confucius",
    " Reading is to the mind, as exercise is to the body. -- Brian Tracy",
    " Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality. -- Brian Tracy",
    " The future belongs to the competent. Get good, get better, be the best! -- Success Quote by Brian Tracy",
    " For every reason its not possible, there are hundreds of people who have faced the same circumstances and succeeded. -- Jack Canfield",
    " Things work out best for those who make the best of how things work out. -- Positive Quote by John Wooden",
    " A room without books is like a body without a soul. -- Marcus Tullius Cicero",
    " I think goals should never be easy, they should force you to work, even if they are uncomfortable at the time. -- Michael Phelps",
    " One of the lessons that I grew up with was to always stay true to yourself and never let what somebody else says distract you from your goals. -- Michelle Obama",
    " Todays accomplishments were yesterdays impossibilities. -- Robert H. Schuller",
    " The only way to do great work is to love what you do. If you havent found it yet, keep looking. Dont settle. -- Steve Jobs",
    " You dont have to be great to start, but you have to start to be great. -- Zig Ziglar",
    " Aclearvision,backedbydefiniteplans,givesyouatremendousfeelingofconfidenceandpersonalpower.BrianTracy",
    " There are no limits to what you can accomplish, except the limits you place on your own thinking. -- Brian Tracy",
    " uccess Quotes for Inspirational Leaders",
    " Integrity is the most valuable and respected quality of leadership. Always keep your word.",
    "Leadership is the ability to get extraordinary achievement from ordinary people",
    " Leaders set high standards. Refuse to tolerate mediocrity or poor performance",
    " Clarity is the key to effective leadership. What are your goals?",
    " The best leaders have a high Consideration Factor. They really care about their people",
    " Leaders think and talk about the solutions. Followers think and talk about the problems.",
    " The key responsibility of leadership is to think about the future. No one else can do it for you.",
    " The effective leader recognizes that they are more dependent on their people than they are on them. Walk softly.",
    " Leaders never use the word failure. They look upon setbacks as learning experiences.",
    " Practice Golden Rule Management in everything you do. Manage others the way you would like to be managed.",
    " Superior leaders are willing to admit a mistake and cut their losses. Be willing to admit that youve changed your mind. Dont persist when the original decision turns out to be a poor one.",
    " Leaders are anticipatory thinkers. They consider all consequences of their behaviors before they act.",
    " The true test of leadership is how well you function in a crisis.",
    " Leaders concentrate single-mindedly on one thing the most important thing, and they stay at it until its complete.",
    " The three Cs of leadership are Consideration, Caring, and Courtesy. Be polite to everyone.",
    " Respect is the key determinant of high-performance leadership. How much people respect you determines how well they perform.",
    " Leadership is more who you are than what you do.",
    " Entrepreneurial leadership requires the ability to move quickly when opportunity presents itself.",
    " Leaders are innovative, entrepreneurial, and future-oriented. They focus on getting the job done.",
    " Leaders are never satisfied; they continually strive to be better."
]


const display_quote = (quotes_list) => {
    return data[randomNumber(data.length)]
};

let text = display_quote(data);

console.log(text)

const elem = document.getElementById("quote").innerHTML = text

