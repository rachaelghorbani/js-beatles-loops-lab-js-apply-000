function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments){
  var array = [];
  for(var i = 0, i < arrayOfMusicians.length; i++){
    var musicianAndInstrument = arrayOfMusicians[i] + arrayOfInstruments[i];
  }
}
// * Create a variable with an empty array.

// * Use a `for loop`, which iterates over the array of musicians. Be careful
//   about what value you set your `counter` variable to store. (Hint: Think
//   about what the first index of an array is). 
// * The first time through the loop, it should create a string using the _first_
//   index of the musicians array **and** the first index of the instruments
//   array: `"John Lennon plays guitar"`. 
// * Add this string to the empty array you created. The loop should make the
//   same sentence for every member of the musicians array. 
// * The function should return the array of new strings containing what
//   instruments each musician plays.
