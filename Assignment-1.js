function add() {
    var s = 0;
    for (var i=0; i < arguments.length; i++) {
      s += arguments[i];
    }
    return s;
  }
  console.log(add(1,2,3,4))
  console.log(add(1,2,3))