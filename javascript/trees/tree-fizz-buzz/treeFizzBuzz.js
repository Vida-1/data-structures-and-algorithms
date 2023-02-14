function treeFizzBuzz(tree) {
  
  let value = "";

  //* post order traversal (arbitrarily selected)
  //* pop node value

  while (value != null) {
    if (!int(value / 3) && !int(value / 5)) {
      return value
    } else {
      if ((value / 3) && !(value / 5)) {
        return "fizz"
      } else {
        if ((value / 5) && (value / 3)) {
          return "buzz"
        } else {
          return "fizzbuzz"
        }
      }
    }
  }
  
  // next node

}
