function workout(input){
const trainingDays = Number(input[0]);
let kmForThisDay = Number(input[1]);
let totalKM = kmForThisDay;

const neededKMToRun = 1000;

for(let i=0; i<trainingDays; i+=1){
    const addedKMThisDay = kmForThisDay * Number(input[i + 2]) / 100;
    kmForThisDay =kmForThisDay + addedKMThisDay;
    totalKM += kmForThisDay;
}

if(totalKM >= neededKMToRun){
    console.log(`You've done a great job running ${Math.ceil(totalKM - neededKMToRun)} more kilometers!`)
}
else{
    console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(neededKMToRun - totalKM)} more kilometers`)
}
}

workout([ 
    '5',  '30', '10',
    '15', '20', '5',
    '12'
  ])