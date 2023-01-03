'use strict';

const { testElement } = require("domutils");
const LinkedList = require("../src");

describe('linked list testing', () => {
  testElement("tests append: add a node ")
  
  testElement('tests insertBefore: adds a node with a given new value immediately before the first node with the given value', () => {
      // when given a value we will return a linked list with the node appearing before the specified node value
    let insertBeforeLinkedList = new LinkedList();
    insertBeforeLinkedList.head = ({ value: 1, next: { value: 3, next: { value: 4, next: null } } });
    let newList = insertBeforeLinkedList.insertBefore(3, 2);  // new value is 2 
    expect(newList).toEqual({
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null,
          },
        },
      },
    });
  });
});