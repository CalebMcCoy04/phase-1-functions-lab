// Code your solution in this file!

function distanceFromHqInBlocks(location){
    const hq = 42
    let numberOfBlocks 
    if (location > hq){
      numberOfBlocks = location - hq 
    } else {
      numberOfBlocks = hq - location
    }
    return  numberOfBlocks
}


function distanceFromHqInFeet(blockNumber){
  const totalBlocks = distanceFromHqInBlocks(blockNumber)
  return 264 * totalBlocks
}

function distanceTravelledInFeet(start, end){
  let distanceTravelled
  if (start > end){
    distanceTravelled = (start - end) * 264
  } else {
    distanceTravelled = (end - start) * 264
  }
  return distanceTravelled
}

function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination)
  if (distance < 400){
    return 0
  } else if(distance >= 400 && distance <= 2000){
    /*
      so the first 400 feet are free, then charge 2 cents per foot
    */
    const notFree = distance - 400
    return notFree * .02
  } else if (distance > 2000 && distance < 2500){
    return 25
  } else if (distance > 2500){
    /*
      it expected 25 to equal 'cannot travel that far'
    */    
    return 'cannot travel that far'
  }
}