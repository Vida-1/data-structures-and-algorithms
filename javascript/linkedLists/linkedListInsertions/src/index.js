'use strict';

const { insertAfter } = require("cheerio/lib/api/manipulation");

// const { empty } = require("cheerio/lib/api/manipulation");

// Attribution: All code below collected from class lecture (lead by Sara Russert)

class Node {  
  constructor(value, next = null) { 
    this.value = value;
    this.next = next; 
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  insert(value) {  //Method: insert  Arguments: value  Returns: nothing  Adds new node with that value to the head of the list with O(1) Time performance
    if (this.head === null) {
      let newNode = new Node(value);
      this.head = newNode;
    } else {
      let leash = new Node(value);       // let leash = new Node (value, this.head);
      leash.next = this.head;
      this.head = leash;
    }
  }

  /*  Method: append  -- Code Challenge 06 Part 1/3
      Arguments: new value
      Returns: nothing
      Adds new node with the given value at the end of the list */
  append(newValue) {
    if (!this.head) this.head = new Node(newValue);
    else {
      let current = this.head;
      while (current) {
        current = current.next;
      }
      current = new Node(value);
      return this.head;
    }
  }
}
  
    /*  Method: insert before  -- Code Challenge 06 Part 2/3
        Arguments: value, new value
        Returns: nothing
        Adds new node with the given new value immediately before the first node that has the value specified */

insertBefore(value, newValue) {
  let newNode = new Node(newValue);
    if (this.head.value === value) { //checking to see if head is value
      newNode.next = newNode;
      this.head = newNode;
      return this.head;
    } else {
      let current = this.head;
      while (!current.next) {
        if (current.next.value === value) {
          newNode.next = current.next;
          current.next = newNode;
          return this.head;
        } else {
          current = current.next;
       }
      }
      return this.head;
    }
  }  

    /*  Method: insert after
        Arguments: value, new value
        Adds a new node with the given new value immediately after the first node that has the value specified */


  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
    let current = this.head;
    while (current) {
      if (current.value === value) {
            newNode.next = current.next;
            current.next = newNode;
            return this.head;
        } else {
            current = current.next;
      }
    }
        return this.head;
  }

  includes(value) {    //  Method: includes  Arguments: value  Returns: Boolean  Indicates whether that value exists as a Node's value somewhere within the list
    // takes a value, iterates through the list and returns true if it finds a node with a matching value
    //returns false if not
    // write a while loop that stops when current is null
    if (!this.head) return false;  //if there are no nodes in the list, end (early exit strategy)

    let current = this.head;
    while (current !== null) {       
      if (value === current.value) return true; // do something to check value
      current = current.next;
    }
    return false;
  }

  toString(){  //Method: string   Arguments: none  Returns: a string representing all the values in the Linked List, formatted as:
    //    "{ a } -> { b } -> { c } -> NULL"
    // while loop that adds/prints each value until we hit null

    let string = "";
    let current = this.head;
      while (current !== null) {
        // iterate through linked list pulling out the values
        // do something
        string = `{ ${current.value} } -> `;
        current = current.next;   // go on to the next
      }
    // I am out of the loop! No more nodes!
    string += "NULL";
    return string;
  }
}

module.exports = { LinkedList };  // does this really need to be in brackets? Look it up!