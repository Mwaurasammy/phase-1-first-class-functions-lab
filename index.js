// Code your solution in this file!
const returnFirstTwoDrivers = function () {
    const driverName = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return driverName.slice(0, 2);
};
const returnLastTwoDrivers = function () {
    const driverName = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return driverName.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (interger) {
    return function (fare) {
        return fare * interger;
    };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driverName, driverSelector){
    return driverSelector(driverName);
};

