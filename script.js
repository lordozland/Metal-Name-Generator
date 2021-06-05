// var generateBtn = document.getElementsByClassName("btn");

// Write password to the #password input
// function createBand() {
  // var Band = generatePassword();
  // var BandName = document.querySelector("#bandcard");
  // console.log("Done")
  // passwordText.value = password;
// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);




function createBand() {
  console.log("Done");
  var bandcard = document.getElementById("bandcard");
  var MetalGuy = [
    "Naught",
    "Harold the Barbarian", 
    "Official of Morbitude", 
    "Gorgon Morotorum",
    "Apollo Gunthers",
    "Miscelaneous Nelsons",
    "Selatious Steven",
    "Glamstick Bobby",
    "Johnny Shreds-a-Lot",
    "Bamboozled the Human",
    "Curious Hegemonious",
    "Bo Burnham's Brother",
    "Floor of Crimson",
    "Pig Infestations",
    "Horror Valley Slampit",
    "Absolved Heretic",
    "Sunburnt Terry",
    "Gunslinger Rick",
    "Arregano Sniffer",
    "Sugafoot, Sugafoot, da shugga fut",
    "Grave Investigator",
    "Scrambles",
    "Saucy Diva the John",
    "Brutal the Legend",
    "Obnoxious Gloria",
    "Heather the Slaying Queen",
    "Glitterbomb",
    "Harry AND Stacey",
    "Politcal like Dave",
    "S is for Laughter",
    "I Dream of Distortion",
    "Rhombus Ditector",
    "Stevie Nicks",
    "Left Shark",
    "WakeMed the Graveyard",
    "I Work for Grim",
    "Berries",
    "I Love My Kittie the Person",
    "Gluttony Pomp",
    "Unicorn",
    "Dragon",
    "Medalion",
    "Van Damme",
    "No Maur",
    "Vet of Brutality",
    "Witch of Darkness",
    "Nihilism Bro",
    "Dance Mosh Hipposh",
    "People (a Collective)",
  ];

  // 48 names

  for (let i = 0; i < MetalGuy.length; i++) {
    const newName = MetalGuy[i];
    var gambit = newName;
  };
  var You = MetalGuy[Math.floor((Math.random() * MetalGuy.length))];

  console.log(You);
  // var randomItem = MetalGuy[Math.floor(Math.random()*MetalGuy.length)];

  // for (let i = 0; i < characters.length; i++) {
  //   const currentChar = characters[i];
  //   if (chosen === currentChar.routeName) {
  //     return res.json(currentChar);
  //   }
  // }

  console.log(gambit)
  bandcard.innerHTML = You;
  
  // var clickCounter = 0;

  // .addEventListener('click', function () {
  //       step = (clickCounter++ % 2 === 0 ? 3 : 0);
  // }, true);
};

// function repeat() {
//   window.ondblclick = init;
//   console.log("dblclick");
// }

// window.onload = init;
// if (i > 1) {
//    return;
// }

// create an alertbox for the name to circumvent the return or window.o