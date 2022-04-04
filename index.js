function scuberGreetingForFeet(amountFeet){
  if (amountFeet > 2500) {
    return "No can do.";
  } else if (amountFeet < 2500 && amountFeet > 2000) {
    return "I will gladly take your thirty bucks.";
  } else if (amountFeet <= 2000 && amountFeet > 400) {
    return "That will be twenty bucks.";
  } else if (amountFeet <= 400) {
    return "This one is on me!";
  }
}



function ternaryCheckCity(city){
  if (city == "NYC"){
    return "Ok, sounds good.";
  }
  else {
    return "No go.";
  }
}

function switchOnCharmFromTip(amount){
  if (amount == "generous"){
    return "Thank you so much.";
  } else if (amount == "not as generous"){
    return "Thank you.";
  } else {
    return "Bye.";
  }
}