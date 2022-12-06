// Code your solution in this file!
function distanceFromHqInBlocks (somevalue){
    return Math.abs(42-somevalue)
  }
  
  function distanceFromHqInFeet(someValue){
    let blocks = distanceFromHqInBlocks(someValue)
    return (blocks*264)
  }

  function distanceTravelledInFeet(start,destination){
    let distance = Math.abs(destination-start)
    return (distance*264)
  }

  function calculatesFarePrice(start, destination){
    let distance= distanceTravelledInFeet(start,destination); 

    if(distance < 400){
      return(0);
      
  }else if(distance >400 && distance <=2000){
      return ((distance-400)*0.02);

  }else if(distance >2000 && distance <=2500){
      return (25)
    }else {distance >2500
      return ("cannot travel that far");
  }

}