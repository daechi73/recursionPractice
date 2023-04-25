//fibonacci iteration

// const fibs = (num) => {
//   let fibsArray = [];
//   for (let i = 0; i < num; i++) {
//     if (i < 2) {
//       fibsArray[i] = i;
//     } else {
//       fibsArray[i] = fibsArray[i - 2] + fibsArray[i - 1];
//     }
//   }
//   console.log(fibsArray);
// };

//fibanacci recursive

// const fibsRec = (num) => {
//   if (num < 2) {
//     return num;
//   } else {
//     return fibsRec(num - 1) + fibsRec(num - 2);
//   }
// };
// fibs(8);
// console.log(fibsRec(8));

// merge sort

// const mergeSort = (arr) => {
//   if (arr.length === 1) return arr;
//   else {
//     let mid = Math.floor(arr.length / 2);
//     // Recursive calls
//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid));
//     return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
//   }
// };

// function merge(left, right) {
//   let sortedArr = []; // the sorted items will go here
//   while (left.length && right.length) {
//     // Insert the smallest item into sortedArr
//     if (left[0] < right[0]) {
//       sortedArr.push(left.shift());
//     } else {
//       sortedArr.push(right.shift());
//     }
//   }
//   // Use spread operators to create a new array, combining the three arrays
//   return [...sortedArr, ...left, ...right];
// }

// console.log(mergeSort([4, 7, 2, 1, 7, 5, 4]));

const linkedList = () => {
  let linkHead;

  const append = (value) => {
    if (linkHead == null || linkHead == undefined) {
      linkHead = value;
    } else {
      let temp = linkHead;
      while (temp.nextNode != null) temp = temp.nextNode;
      temp.nextNode = value;
    }
  };
  const prepend = (value) => {
    if (linkHead == null) {
      linkHead = value;
    }
    let temp = linkHead;
    linkHead = value;
    linkHead.nextNode = temp;
  };
  const size = () => {
    count = 0;
    if (linkHead == null) return count;
    count++;
    temp = linkHead;
    while (temp.nextNode != null) {
      count++;
      temp = temp.nextNode;
    }
    return count;
  };
  const head = () => {
    return linkHead;
  };
  const tail = () => {};

  const at = (index) => {};
  const pop = () => {
    linkedList.pop();
  };
  const find = (value) => {};
  const toString = () => {
    let temp = linkHead;
    if (temp == null || temp == undefined) return `Linked list Empty`;
    let output = "<HEAD> ";
    while (temp.nextNode != null) {
      output += `( ${temp.value} ) -> `;
      temp = temp.nextNode;
    }
    output += `( ${temp.value} ) <TAIL> `;
    return output;
  };
  return { append, prepend, size, head, tail, at, pop, find, toString };
};

const node = (value) => {
  return { value, nextNode: null };
};

const newLinkedList = linkedList();

newLinkedList.append(node("jaja"));
newLinkedList.append(node("hello"));
console.log(newLinkedList.size());
console.log(newLinkedList.toString());
