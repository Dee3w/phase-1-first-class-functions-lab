// Code your solution in this file!

// returns First Two Drivers!
const returnFirstTwoDrivers =function(drivers) {
    return drivers.slice(0,2);
};
const drivers = ["Susan","Wendy","Fiona","Michey"];
const firstTwoDrivers = returnFirstTwoDrivers(drivers);
console.log(firstTwoDrivers);

 // return Last Two Drivers!
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};
const lastTwoDrivers = returnLastTwoDrivers(drivers);
console.log(lastTwoDrivers);

// Selecting Drivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const getFirstTwoDrivers = selectingDrivers[0](drivers);
console.log(firstTwoDrivers);

// creating a fare multiplier
const createFareMultiplier = function(multiplier) {
    return function(value) {
        return value * multiplier;
    };
};

// fare doubler/tripler
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const fare = 10;

const doubledFare = fareDoubler(fare);
console.log(doubledFare);

const tripledFare = fareTripler(fare);
console.log(tripledFare);

//selecting different drivers(arrayofdrivers, function)
const selectDifferentDrivers = function(arraysOfDrivers, selectingFunction) {
    return selectingFunction(arraysOfDrivers);
}
const getfirstTwoDrivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
console.log(firstTwoDrivers);

const getlastTwoDrivers = selectDifferentDrivers(drivers, returnLastTwoDrivers);
console.log(lastTwoDrivers);

