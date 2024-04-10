const getSleepHours = day => {
    switch(day) {
        case 'monday':
            return 8;
            break;
        case 'tuesday':
            return 9;
            break;
        case 'wednesday': 
            return 7;
            break;
        case 'thursday':
            return 8;
            break;
        case 'friday':
            return 8;
            break;
        case 'saturday':
            return 7;
            break
        case 'sunday':
            return 9;
            break;
        default:
            return 'Error: invalid day';
            break;
    }
}

const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}

/* getActualSleepHours without calling getSleepHours()

const getActualSleepHours = () => {
    return 8 + 9 + 7 + 8 + 8 + 7 + 9;
} */

const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
}

/* getIdeaSleepHours() with an argument passed

const getIdealSleepHours = (idealHours) => {
    return idealHours * 7;
} 

*/

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    /* passing an argument in getIdealSleepHours()

    let idealSleepHours = getIdealSleepHours(7);

    */

    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got more sleep than you needed! You slept ' + (actualSleepHours - idealSleepHours) + ' extra hours.');
    } else {
        console.log('You should get some rest! You slept ' + (idealSleepHours - actualSleepHours) + ' hours less than you needed.');
    }
}

calculateSleepDebt();