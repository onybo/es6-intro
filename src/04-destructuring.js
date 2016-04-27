/***********************/
// destructuring //
/***********************/

const car = {
  brand: "mazda",
  model: "cx-5",
  seats: 5,
  heatedSeats: true
}

const bike = {
  brand: "cannondale",
  model: "2016 Slate Ultegra Disc",
  frame: "Slate, SmartFormed 6069 Alloy, Di2 ready",
  breaktype: "disc"
}

const vehicleInfo = (vehicle) => {
  const {brand, model} = vehicle;  /// <--- destructuring
  console.log(`brand: ${brand}, model: ${model}`);
}
vehicleInfo(car);


/***********************/
//destructuring parameters
/***********************/
//const vehicleInfo = ({brand, model}) => console.log(`brand: ${brand}, model: ${model}`);

/***********************/
//destructuring arrays
/***********************/
// const cars = [{brand: 'mazda', model: 'cx-5'}, {brand: 'tesla', model: 's'}, {brand: 'volvo', model: 'v40'}];
// const [riskoker, , svenske] = cars;
// console.log(`riskoker er: ${riskoker.brand}`);
// console.log(`svenske er ${svenske.brand}`);