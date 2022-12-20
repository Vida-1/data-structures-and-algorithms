'use strict';

// const { empty } = require("cheerio/lib/api/manipulation");

// Attribution: All code below collected from class lecture (lead by Sara Russert)

class Node {  //this is our node class, any new Node we make will have thi structure
  constructor(value, next = null) { //Sara explains this in lecture
    this.value = value;
    this.next = next;  //this.prev is for a doubly-linked list which points both to next and prev
  }
}

class LinkedList {  // create a LinkedList class
  constructor() {
    this.head = null; // upon instantiation, an empty Linked List should be created within this class there should be a NODE property called head(always points to the first element in the LL)
  }

  // size is a property you could add to any data structure
  // always the head is the very first node of the list

  // The class should contain:
  /*  Method: insert
        Arguments: value
        Returns: nothing
        Adds new node with that value to the head of the list with O(1) Time performance
*/

  insert(value) {
    // add a new node to the head of the list with the value argument
    // if this.head === null) this.head = new Node(value)
    if (this.head === null) {
      let newNode = new Node(value);
      this.head = newNode;
    } else {
      // let leash = new Node (value, this.head);
      let leash = new Node(value);
      leash.next = this.head;
      this.head = leash;
    }
    
    // if there is something in the head position?? we gotta do the switcharoo
    // attach a leash to the new node, make the next the curent head
    // make the new node the new head

  }

  
  /*  Method: includes
          Arguments: value
          Returns: Boolean
          Indicates whether that value exists as a Node's value somewhere within the list */

  includes(value) {
    // takes a value, iterates through the list and returns true if it finds a node with a matching value
    //returns false if not
    // write a while loop that stops when current is null
    if (!this.head) return false;  //if there are no nodes in the list, end (early exit strategy)

    let current = this.head;
    while (current !== null) {
      // do something to check value
      if (value === current.value) return true;
      current = current.next;
    }
    return false;
  }


        /*

      Method: string
        Arguments: none
        Returns: a string representing all the values in the Linked List, formatted as:
        "{ a } -> { b } -> { c } -> NULL"
  */

  toString(){
    //    "{ a } -> { b } -> { c } -> NULL"
    // while loop that adds/prints each value until we hit null

    let string = "";
    let current = this.head;
      while (current !== null) {
        // iterate through linked list pulling out the values
        // do something
        string = `{ ${current.value} } -> `;
        // go on to the next
        current = current.next;
      }
    // I am out of the loop! No more nodes!
    string += "NULL";
    return string;
  }
}


// note: methods do not come in a pre-built library for linked-list class.

module.exports = LinkedList;
