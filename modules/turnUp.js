function turnUp(Direction) {
    if (Direction == "N" || Direction == "S" || Direction == "E" || Direction == "W") {
      return "U";
    }
    if (Direction === "U") {
      return "N";
    }
    if (Direction === "D") {
      return "S";
    }
    
  }
  
  module.exports = {
    turnUp,
  };
  