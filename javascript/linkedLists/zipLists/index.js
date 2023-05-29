'use strict';

const zipLists= (list1, list2) =>{
  let aCurrent = list1.head;
  let bCurrent = list2.head;
  let aNext, bNext;

  while (aCurrent !== null && bCurrent !== null) {
    aNext = aCurrent.next;
    bNext = bCurrent.next;

    bCurrent.next = aNext;
    aCurrent.next = bCurrent;

    aCurrent = aNext;
    bCurrent = bNext;
  }

  list2.head = bCurrent;

  return list2;
};

zipLists();
