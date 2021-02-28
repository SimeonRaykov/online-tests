function everest(input){
    const STARTING_POSITION = 5364;
    const EVEREST_HIGH = 8848;
    const MAX_DAYS = 5;

    let currentDay = 1;
    let currentPosition = STARTING_POSITION;
    let dayReachedEverest = null;

    const END = 'END';
    const YES = 'Yes';
    const NO = 'No';

    for(let i=0; i<=input.length; i+=2){

        if(input[i] != END){
            if(input[i] == YES && currentDay === MAX_DAYS){
                break;
            }
            if(input[i] == YES){
            currentDay += 1;
            currentPosition += parseInt(input[i+1]);
            }
            else if (input[i] == NO){
            currentPosition += parseInt(input[i+1]);
            }
            if(currentPosition >= EVEREST_HIGH && !dayReachedEverest)
                dayReachedEverest = currentDay;
            }
        else{
            break;
        }

        if(MAX_DAYS < currentDay){
            break;
        }
    }

    if(currentPosition >= EVEREST_HIGH){
        return `Goal reached for ${dayReachedEverest} days!`;
    }
    else{
        console.log(`Failed!`);
        console.log(currentPosition);
    }
}
console.log(everest(['Yes', '535', 'Yes', '849', 'Yes', '499', 'Yes', '400', 'Yes', '500']))

// console.log(everest(['END']))

// console.log(everest([
//     'No', '5000',
//     'Yes', '1402',
//     'No',  '250',
//     'Yes', '635',
//     ''
//   ]));

//   console.log(everest([
//     'Yes', '1000',
//     'Yes', '945',
//     'No',  '1200',
//     'END', ''
//   ]))
