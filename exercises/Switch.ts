import { error } from "console";

let weekDay = 5;

if (weekDay <= 0){
   // console.log ('ke?')  
    throw new Error ('que dices lokete')
}

switch( weekDay ) {

    case 1:
        console.log ('Lune')
        break;

    case 2:
        console.log ('MarteS')   
        break;

    case 3:
        console.log ('Miercole')  
        break;
    default:
        console.log ('Ke')  
}