// Code your solution in this file!
// const ScuberStreetNum = 42;
// const blockFeet = 264;

function distanceFromHqInBlocks(intial) {
    if (intial > 42) {
      let distance = intial - 42;
      return distance;
    } else {
      let distance = 42 - intial;
      return distance;
    }
  }
  
  
  function distanceFromHqInFeet(intial) {
    let feet = distanceFromHqInBlocks(intial) * 264;
    return feet;
  }

  
  function distanceTravelledInFeet(intial, final) {
    let distanceTravelled;
    if (intial > final) {
       distanceTravelled = (intial - final) * 264;
      return distanceTravelled;
    } else {
       distanceTravelled = (final - intial) * 264;
      return distanceTravelled;
    }
  }
  


  function calculatesFarePrice(start, destination) {
    let distanceTravelled = distanceTravelledInFeet(start, destination);
    let fareprice;
  
    if (distanceTravelled > 0 && distanceTravelled <= 400) {
      return 0;
    } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
      fareprice = (distanceTravelled - 400) * 0.02;
    } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
      fareprice = 25;
    } else {
      return "cannot travel that far";
    }
    return fareprice;
  }