function excursionCalculator(input){
const [people, season] = input;

const AUTUMN = 'autumn';
const SPRING = 'spring';
const SUMMER = 'summer';
const WINTER = 'winter';

const AUTUMNPersonHighPrice = 60;
const AUTUMNPersonLowPrice = 49.5;

const SpringPersonHighPrice = 50;
const SpringPersonLowPrice = 48;

const SummerPersonHighPrice = 48.5;
const SummerPersonLowPrice = 45;
const summerDiscount = 0.85;

const WinterPersonHighPrice = 86;
const WinterPersonLowPrice = 85;
const winterOverPrice = 1.08;

const peopleMoreThanFive = people > 5;

let finalPrice = 0;

switch(season){
case AUTUMN:{
    if(peopleMoreThanFive){
        finalPrice = AUTUMNPersonLowPrice * people;
    }
    else{
        finalPrice = AUTUMNPersonHighPrice * people;
    }
    break;
}
case SPRING:{
    if(peopleMoreThanFive){
        finalPrice = SpringPersonLowPrice * people;
    }
    else{
        finalPrice = SpringPersonHighPrice * people;
    }
    break;
}
case SUMMER:{
    if(peopleMoreThanFive){
        finalPrice = SummerPersonLowPrice * people;
    }
    else{
        finalPrice = SummerPersonHighPrice * people;
    }
    finalPrice *= summerDiscount;
    break;
}
case WINTER:{
    if(peopleMoreThanFive){
        finalPrice = WinterPersonLowPrice * people;
    }
    else{
        finalPrice = WinterPersonHighPrice * people;
    }
    finalPrice *= winterOverPrice;
    break;
}
default :{
    break;
}
}

const formattedFinalPrice = finalPrice.toFixed(2);
return `${formattedFinalPrice} leva.`;
}

excursionCalculator([5, 'spring']);
excursionCalculator([10, 'summer']);
excursionCalculator([15, 'autumn']);
excursionCalculator([20, 'winter']);