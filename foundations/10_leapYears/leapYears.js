const leapYears = function(year) {
    const isALeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    const notALeapYear = year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0);
    const isCentury = year % 100 === 0;
    



};

// Do not edit below this line
module.exports = leapYears;
