let parkingState = [
  [1,0,1,1,0,2],
  [0,0,0,2,0,1],
  [1,1,2,1,0,1],
  [2,1,1,1,0,2]
]

// Your code here
function getParkingLotState(array) {
  let state = {
    totalSlots: 0,
    availableSlots: 0,
    occupiedSlots: 0
  }
  for(let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if(array[i][j] === 1) {
        state.totalSlots += 1
        state.occupiedSlots += 1
      } else if(array[i][j] === 2) {
        state.totalSlots += 1
        state.availableSlots += 1
      }
    }
  }
  return state
}

console.log(getParkingLotState(parkingState))