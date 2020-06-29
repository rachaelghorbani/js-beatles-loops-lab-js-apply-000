function theBeatlesPlay(musician, instrument){
  var array = [];
  for(var i = 0; i < musician.length; i++){
      var currentMusician = musician[i];
        var currentInstrument = instrument[i];
        var musicianAndInstrument = currentMusician + " plays " + currentInstrument;
        array.push(musicianAndInstrument);
      }
  
  return array;
  }