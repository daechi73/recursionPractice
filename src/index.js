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
  const linkedList = [];

  const append = (value) => {
    if (linkedList.length === 0) linkedList.push(value);
    else {
      linkedList.push(value);
      linkedList[linkedList.length - 2].nextNode =
        linkedList[linkedList.length - 1];
    }
  };
  const prepend = (value) => {
    linkedList.unshift(node(value));
    linkedList[0].nextNode = linkedList[1];
  };
  const size = () => {
    return linkedList.length;
  };
  const head = () => {
    return linkedList[0];
  };
  const tail = () => {
    return linkedList[linkedList.length - 1];
  };

  const at = (index) => {
    return linkedList[index];
  };
  const pop = () => {
    linkedList.pop();
  };
  const find = (value) => {
    return linkedList.findIndex((n) => {
      n.value === value;
    });
  };
  const toString = () => {
    let output = "";
    linkedList.forEach((n) => {
      output += `( ${n.value} ) -> `;
      if (n.nextNode == null) output += " ( null )";
    });
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
newLinkedList.append(node("faraway"));
console.log(newLinkedList.toString());

// let ranks = ["jaja", 5, 7, 8, 10, 7];
// let index = ranks.findIndex((rank) => rank === "7");
// console.log(index);
// console.log(ranks.findIndex((rank) => rank === "jaja"));
