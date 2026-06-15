const leapYears = function(year) {
    const isALeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    const notALeapYear = year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0);
    const isCentury = year % 100 === 0;
    const isDivisibleByFourHundred = year % 400 === 0;
    
    if (isALeapYear) {
        return true;
    } else if (notALeapYear) {
        return false;
    } else if (isCentury && !isDivisibleByFourHundred) {
        return false;
    } else if (isDivisibleByFourHundred) {
        return true;
    }

    



};

// Do not edit below this line
module.exports = leapYears;
