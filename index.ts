// Number Types mini-challenge 10 
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement

const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user') as HTMLElement

const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

// Solution
function showReviewTotal (value : number, reviewer : string, isLoyalty : boolean) {
    const iconDisplay = isLoyalty ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total: ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}


showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)


const you: {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: string[];
    phone: (string | number)[];
} = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow'],
    phone: ['256987001', 96550236]
}


function populateUser(isReturning : boolean, userName : string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

populateUser(you.isReturning, you.firstName)