function Hotel(name, rooms, booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailablity = function(){
        return this.rooms - this.booked;
    };
}

var clyatonHotel = new Hotel('Clayton', 128, 25);
var lemonHotel = new Hotel('Lemon', 76, 14);
var parkHotel = new Hotel('Park', 120, 77);

console.log(clyatonHotel, lemonHotel, parkHotel);