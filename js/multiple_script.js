// Define a constructor function template for hotels
function Hotel(name, rooms, booked, pool) {
    // Object properties
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.pool = pool;
    this.checkAvailablity = function() {
        return this.rooms - this.booked;
    }
}

// Define to instances of the hotel and their arguments
var clayHotel = new Hotel('Clayton', 68, 3, 1);
var lemonHotel = new Hotel('Lemon', 56, 15, 0);
var parkHotel = new Hotel('Park', 120, 77, 3);

// Declare a variable to hold the name of the hotel and room availability 
var details1 = clayHotel.name + ' rooms: ';
    // add content to an existing variable----
    details1 += clayHotel.checkAvailablity();
// Get the hotel1 div
var elHotel1 = document.getElementById('hotel1');
// Add the variables created onto the empty div
elHotel1.textContent = details1;

var details2 = lemonHotel.name + ' rooms: ';
    details2 += lemonHotel.checkAvailablity();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;

var details3 = parkHotel.name + ' rooms: ';
    details3 += parkHotel.checkAvailablity();
var elHotel3 = document.getElementById('hotel3');
elHotel3.textContent = details3;

var details4 = clayHotel.name + ', number of pools: ';
    details4 += clayHotel.pool;
var elPool1 = document.getElementById('pool1');
    elPool1.textContent = details4;

var details5 = lemonHotel.name + ', number of pools: ';
    details5 += lemonHotel.pool;
var elPool2 = document.getElementById('pool2');
    elPool2.textContent = details5;

var details6 = parkHotel.name + ', number of pools: ';
    details6 += parkHotel.pool;
var elPool3 = document.getElementById('pool3');
    elPool3.textContent = details6;


