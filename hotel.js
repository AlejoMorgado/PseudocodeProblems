const occupiedRooms = [];
const maxRooms = 20;
let requiredRooms = 2;
let checkInHour = 10;

if (requiredRooms <= maxRooms && checkInHour < 12) {
  let availableRooms = maxRooms - requiredRooms;
  if (availableRooms >= requiredRooms) {
    for (let i = 1; i <= requiredRooms; i++) {
      occupiedRooms.push(i);
    }
    console.log(`Registration successful. Occupied rooms: ${occupiedRooms} and available rooms ${availableRooms}`);
  } else {
    console.log("Sorry, there are no available rooms.");
  }
} else if (checkInHour > 12) {
  console.log("Sorry, registration is not possible at this time.");
} else {
  console.log("No rooms available");
}
